import React, { useState } from 'react';
import { value } from '../utils/fields.js';
import VendorLookup from './VendorLookup.jsx';

const STEPS = [
  { id: 'start', title: 'Start', description: 'Supplier Maintenance Request' },
  { id: 'vendor-lookup', title: 'Vendor Lookup', description: 'Search existing vendors' },
  { id: 'getting-started', title: 'Getting Started', description: 'Basic vendor information' },
  { id: 'tax-info', title: 'Tax Information', description: 'W9 and tax identification' },
  { id: 'contact', title: 'Contact Details', description: 'How to reach this vendor' },
  { id: 'address', title: 'Address Information', description: 'Where to send payments' },
  { id: 'classification', title: 'Business Classification', description: 'Category and trade information' },
  { id: 'certifications', title: 'Certifications', description: 'Special business certifications' },
  { id: 'usage', title: 'Vendor Purpose', description: 'How will you use this vendor?' },
  { id: 'review', title: 'Review & Submit', description: 'Confirm your information' }
];

export default function VendorRequestForm({ service, currentUser }) {
  const [currentStep, setCurrentStep] = useState(0);
  
  const [formData, setFormData] = useState({
    vendor_name: '',
    vendor_name_2: '',
    vendor_name_3: '',
    w9_ssn: '',
    w9_ein: '',
    vendor_contact: '',
    vendor_phone: '',
    vendor_phone_ext: '',
    vendor_fax: '',
    vendor_email: '',
    remit_address: '',
    city: '',
    state: '',
    zip_code: '',
    trade_station: '',
    group_key: '',
    category_code: '',
    category_description: '',
    minority_owned: false,
    wbe_vendor: false,
    mastercard_accepted: false,
    certificate_number: '',
    certificate_expiration: '',
    replacing_vendor: false,
    replacing_vendor_name: '',
    replacing_vendor_id: '',
    vendor_used_for: '',
    priority: 'medium'
  });

  const [stepValidation, setStepValidation] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (field, inputValue) => {
    setFormData(prev => ({
      ...prev,
      [field]: inputValue
    }));
    
    // Clear validation error for this field
    if (stepValidation[field]) {
      setStepValidation(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const validateCurrentStep = () => {
    const errors = {};
    
    switch(currentStep) {
      case 0: // Start - No validation needed
        break;
      case 1: // Vendor Lookup - No validation needed
        break;
      case 2: // Getting Started
        if (!formData.vendor_name.trim()) {
          errors.vendor_name = 'Vendor name is required';
        }
        break;
      case 3: // Tax Info
        if (!formData.w9_ssn && !formData.w9_ein) {
          errors.tax_id = 'Either SSN or EIN is required';
        }
        break;
      case 4: // Contact - No required fields, but validate email format if provided
        if (formData.vendor_email && !formData.vendor_email.includes('@')) {
          errors.vendor_email = 'Please enter a valid email address';
        }
        break;
      case 5: // Address - No required fields
        break;
      case 6: // Classification - No required fields
        break;
      case 7: // Certifications - No required fields
        break;
      case 8: // Usage
        if (!formData.vendor_used_for.trim()) {
          errors.vendor_used_for = 'Please describe how this vendor will be used';
        }
        break;
    }
    
    setStepValidation(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep(prev => prev + 1);
        setError('');
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setError('');
    }
  };

  const handleStepClick = (stepIndex) => {
    // Allow clicking on completed steps or the next step
    if (stepIndex <= currentStep + 1 && stepIndex < STEPS.length - 1) {
      setCurrentStep(stepIndex);
    }
  };

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;

    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const requestData = {
        ...formData,
        requested_by: value(currentUser?.sys_id),
        request_status: 'new'
      };

      const result = await service.createVendorRequest(requestData);
      setSuccess(`🎉 Success! Vendor request ${result.result?.request_number || ''} has been submitted successfully!`);
      
      // Reset form and go to first step
      setFormData({
        vendor_name: '',
        vendor_name_2: '',
        vendor_name_3: '',
        w9_ssn: '',
        w9_ein: '',
        vendor_contact: '',
        vendor_phone: '',
        vendor_phone_ext: '',
        vendor_fax: '',
        vendor_email: '',
        remit_address: '',
        city: '',
        state: '',
        zip_code: '',
        trade_station: '',
        group_key: '',
        category_code: '',
        category_description: '',
        minority_owned: false,
        wbe_vendor: false,
        mastercard_accepted: false,
        certificate_number: '',
        certificate_expiration: '',
        replacing_vendor: false,
        replacing_vendor_name: '',
        replacing_vendor_id: '',
        vendor_used_for: '',
        priority: 'medium'
      });
      setCurrentStep(0);

    } catch (err) {
      setError('Failed to submit vendor request. Please try again.');
      console.error('Submit error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const renderProgressBar = () => (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-steps">
          {STEPS.map((step, index) => (
            <div 
              key={step.id}
              className={`progress-step ${index <= currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}
              onClick={() => handleStepClick(index)}
            >
              <div className="step-number">
                {index < currentStep ? '✓' : index + 1}
              </div>
              <div className="step-info">
                <div className="step-title">{step.title}</div>
                <div className="step-description">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep = () => {
    switch(currentStep) {
      case 0: // Start - SMR Dialog
        return (
          <div className="step-content smr-dialog">
            <div className="dialog-header">
              <h2>Supplier Maintenance Request</h2>
              <div className="dialog-settings">⚙️</div>
            </div>

            <div className="dialog-tabs">
              <div className="tab active">Start</div>
              <div className="tab">Requested Process</div>
              <div className="tab">Additional Info</div>
              <div className="tab">Summary</div>
            </div>

            <div className="dialog-content">
              <div className="section">
                <h3>Requested Process</h3>
                <div className="process-option selected">
                  <input type="radio" id="new_vendor" name="process" checked readOnly />
                  <label htmlFor="new_vendor">New Vendor</label>
                </div>
              </div>

              <div className="section">
                <h3>Process Description</h3>
                <div className="description-box">
                  <p>
                    The New Vendor request system allows you to request a new vendor to be created and added to SAP. If the request is approved, the new vendor will also be added to the MyFinance application when applicable.
                  </p>
                  <p>
                    The New Vendor request system requires vendor CEO approval for the requested vendor prior to SMR submission. The Model Market Vendor Exception Form (https://cppgic.sharepoint.com/sites/us-myc-foodbuy/purchasingandcomplianceresources#/sites/opus-local-model-market.aspx) and an email showing sector CEO approval must be submitted with this request. If you do not have access to MyCompass, please contact your account manager for the Vendor Exception Form.
                  </p>
                  <p>
                    For vendors that are technical in nature (i.e. POS Systems, Computers, Hardware, Software, etc.), please go to: https://lf.compass-usa.com/Forms/VMOProQual to start the qualification system prior to requesting a new vendor.
                  </p>
                </div>
              </div>

              <div className="section">
                <h3>Required Documents</h3>
                <div className="requirements-box">
                  <p><strong>The following attachments and information are required to complete this request:</strong></p>
                  <ul>
                    <li>* Attachment of Vendor Exception Form (https://cppgic.sharepoint.com/sites/us-myc-foodbuy/purchasingandcomplianceresources#/sites/opus-local-model-market.aspx)</li>
                    <li>* If you do not have access to MyCompass, please contact your account manager for the Vendor Exception Form**</li>
                    <li>* Email thread showing sector CEO approval</li>
                    <li>* Vendor Name</li>
                    <li>* Vendor Remit To Address</li>
                    <li>* Vendor Email To</li>
                    <li>* Reason Vendor Must be Used</li>
                    <li>* Products Bought from Vendor</li>
                    <li>* Vendor Contact Name</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 1: // Vendor Lookup
        return (
          <div className="step-content vendor-lookup-wizard-step">
            <div className="step-header">
              <h2>Search for Existing Vendors</h2>
              <p>Before creating a new vendor, please search to see if this vendor already exists in our system.</p>
            </div>
            
            <div className="lookup-warning">
              <p>
                <strong style={{ color: '#dc3545' }}>
                  Please make a note of the use guidelines description for the vendor you are selecting for this request. If the use guidelines field is blank, then the vendor is available 
                  to everybody. Selecting a vendor that is not available for your sector will result in your request being denied or delayed.
                </strong>
              </p>
            </div>

            <VendorLookup service={service} />

            <div className="wizard-lookup-footer">
              <div className="alert alert-info">
                <strong>No matching vendor found?</strong> Click "Next" to proceed with creating a new vendor request.
              </div>
            </div>
          </div>
        );

      case 2: // Getting Started
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>Let's get started with your new vendor</h2>
              <p>Since no existing vendor was selected, we'll create a new vendor record.</p>
            </div>
            
            <div className="guided-section">
              <div className="info-box">
                <h4>📋 Important Note</h4>
                <p>You must enter the Vendor Name exactly how it appears in legal documents, such as W-9 tax certificates or insurance documents.</p>
              </div>

              <div className="form-group">
                <label className="form-label required">What is the legal name of this vendor?</label>
                <input
                  type="text"
                  className={`form-control ${stepValidation.vendor_name ? 'error' : ''}`}
                  value={formData.vendor_name}
                  onChange={(e) => handleInputChange('vendor_name', e.target.value)}
                  placeholder="Enter the exact legal business name"
                />
                {stepValidation.vendor_name && (
                  <div className="error-message">{stepValidation.vendor_name}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Does this vendor have an alternate name? (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.vendor_name_2}
                  onChange={(e) => handleInputChange('vendor_name_2', e.target.value)}
                  placeholder="e.g., DBA name, common name, or abbreviation"
                />
                <small className="form-help">This could be a "Doing Business As" (DBA) name or common abbreviation</small>
              </div>

              <div className="form-group">
                <label className="form-label">Any additional name variation? (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.vendor_name_3}
                  onChange={(e) => handleInputChange('vendor_name_3', e.target.value)}
                  placeholder="Another name this vendor might use"
                />
              </div>
            </div>
          </div>
        );

      case 3: // Tax Information
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>Tax Information</h2>
              <p>We need tax identification information from the vendor's W-9 form.</p>
            </div>
            
            <div className="guided-section">
              <div className="info-box">
                <h4>🔒 Secure Information</h4>
                <p>Tax information is kept secure and is only used for payment processing and tax reporting.</p>
              </div>

              <div className="tax-choice">
                <p><strong>What type of tax ID does this vendor have?</strong></p>
                <p className="help-text">Most individuals use SSN, while businesses typically have an EIN.</p>
              </div>

              <div className="form-group">
                <label className="form-label">Social Security Number (SSN)</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.w9_ssn}
                  onChange={(e) => handleInputChange('w9_ssn', e.target.value)}
                  placeholder="XXX-XX-XXXX"
                  maxLength="11"
                />
                <small className="form-help">For individual contractors and sole proprietors</small>
              </div>

              <div className="or-divider">
                <span>OR</span>
              </div>

              <div className="form-group">
                <label className="form-label">Employer Identification Number (EIN)</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.w9_ein}
                  onChange={(e) => handleInputChange('w9_ein', e.target.value)}
                  placeholder="XX-XXXXXXX"
                  maxLength="10"
                />
                <small className="form-help">For businesses, LLCs, partnerships, and corporations</small>
              </div>

              {stepValidation.tax_id && (
                <div className="error-message">{stepValidation.tax_id}</div>
              )}
            </div>
          </div>
        );

      case 4: // Contact Information
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>Contact Information</h2>
              <p>How can we reach this vendor when we need to?</p>
            </div>
            
            <div className="guided-section">
              <div className="form-group">
                <label className="form-label">Primary Contact Person</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.vendor_contact}
                  onChange={(e) => handleInputChange('vendor_contact', e.target.value)}
                  placeholder="Name of main contact person"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={formData.vendor_phone}
                    onChange={(e) => handleInputChange('vendor_phone', e.target.value)}
                    placeholder="(XXX) XXX-XXXX"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Extension</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.vendor_phone_ext}
                    onChange={(e) => handleInputChange('vendor_phone_ext', e.target.value)}
                    placeholder="Ext."
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className={`form-control ${stepValidation.vendor_email ? 'error' : ''}`}
                  value={formData.vendor_email}
                  onChange={(e) => handleInputChange('vendor_email', e.target.value)}
                  placeholder="contact@vendor.com"
                />
                {stepValidation.vendor_email && (
                  <div className="error-message">{stepValidation.vendor_email}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Fax Number (if applicable)</label>
                <input
                  type="tel"
                  className="form-control"
                  value={formData.vendor_fax}
                  onChange={(e) => handleInputChange('vendor_fax', e.target.value)}
                  placeholder="(XXX) XXX-XXXX"
                />
              </div>
            </div>
          </div>
        );

      case 5: // Address Information
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>Payment Address</h2>
              <p>Where should we send payments to this vendor?</p>
            </div>
            
            <div className="guided-section">
              <div className="info-box">
                <h4>💰 Remit-To Address</h4>
                <p>This is where checks and electronic payments will be sent. Make sure this address is current and accurate.</p>
              </div>

              <div className="form-group">
                <label className="form-label">Street Address</label>
                <textarea
                  className="form-control"
                  value={formData.remit_address}
                  onChange={(e) => handleInputChange('remit_address', e.target.value)}
                  rows="3"
                  placeholder="123 Business Street, Suite 100"
                />
                <small className="form-help">Include suite, floor, or unit numbers if applicable</small>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="City name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    placeholder="State"
                    maxLength="2"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.zip_code}
                    onChange={(e) => handleInputChange('zip_code', e.target.value)}
                    placeholder="12345"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 6: // Business Classification
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>Business Classification</h2>
              <p>Help us categorize this vendor for better organization and reporting.</p>
            </div>
            
            <div className="guided-section">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Trade Station</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.trade_station}
                    onChange={(e) => handleInputChange('trade_station', e.target.value)}
                    placeholder="Trade station code"
                  />
                  <small className="form-help">Internal classification code (if applicable)</small>
                </div>

                <div className="form-group">
                  <label className="form-label">Group Key</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.group_key}
                    onChange={(e) => handleInputChange('group_key', e.target.value)}
                    placeholder="Group identifier"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Category Code</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.category_code}
                    onChange={(e) => handleInputChange('category_code', e.target.value)}
                    placeholder="e.g., CONSULTING, SUPPLY, REPAIR"
                  />
                  <small className="form-help">What type of business is this?</small>
                </div>

                <div className="form-group">
                  <label className="form-label">Category Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.category_description}
                    onChange={(e) => handleInputChange('category_description', e.target.value)}
                    placeholder="Describe the business category"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 7: // Certifications
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>Special Certifications</h2>
              <p>Does this vendor have any special business certifications?</p>
            </div>
            
            <div className="guided-section">
              <div className="info-box">
                <h4>🏆 Diversity & Special Programs</h4>
                <p>These certifications may qualify the vendor for special procurement programs or preferences.</p>
              </div>

              <div className="checkbox-group">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="minority_owned"
                    checked={formData.minority_owned}
                    onChange={(e) => handleInputChange('minority_owned', e.target.checked)}
                  />
                  <label htmlFor="minority_owned" className="form-label">
                    <strong>Minority Owned Business</strong>
                    <small>Business owned and controlled by minority individuals</small>
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    id="wbe_vendor"
                    checked={formData.wbe_vendor}
                    onChange={(e) => handleInputChange('wbe_vendor', e.target.checked)}
                  />
                  <label htmlFor="wbe_vendor" className="form-label">
                    <strong>Women Business Enterprise (WBE)</strong>
                    <small>Business owned and controlled by women</small>
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    id="mastercard_accepted"
                    checked={formData.mastercard_accepted}
                    onChange={(e) => handleInputChange('mastercard_accepted', e.target.checked)}
                  />
                  <label htmlFor="mastercard_accepted" className="form-label">
                    <strong>Accepts Mastercard Payments</strong>
                    <small>Vendor can accept credit card payments</small>
                  </label>
                </div>
              </div>

              {(formData.minority_owned || formData.wbe_vendor) && (
                <div className="certification-details">
                  <h4>Certification Details</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Certificate Number</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.certificate_number}
                        onChange={(e) => handleInputChange('certificate_number', e.target.value)}
                        placeholder="Certification number"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Certificate Expiration Date</label>
                      <input
                        type="date"
                        className="form-control"
                        value={formData.certificate_expiration}
                        onChange={(e) => handleInputChange('certificate_expiration', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="replacement-section">
                <h4>Vendor Replacement</h4>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="replacing_vendor"
                    checked={formData.replacing_vendor}
                    onChange={(e) => handleInputChange('replacing_vendor', e.target.checked)}
                  />
                  <label htmlFor="replacing_vendor" className="form-label">
                    <strong>This vendor is replacing an existing vendor</strong>
                    <small>Select if this new vendor will replace a current vendor</small>
                  </label>
                </div>

                {formData.replacing_vendor && (
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Replacing Vendor Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.replacing_vendor_name}
                        onChange={(e) => handleInputChange('replacing_vendor_name', e.target.value)}
                        placeholder="Name of vendor being replaced"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Replacing Vendor ID</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.replacing_vendor_id}
                        onChange={(e) => handleInputChange('replacing_vendor_id', e.target.value)}
                        placeholder="ID of vendor being replaced"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 8: // Vendor Purpose
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>How will you use this vendor?</h2>
              <p>Tell us about the products or services this vendor will provide.</p>
            </div>
            
            <div className="guided-section">
              <div className="form-group">
                <label className="form-label required">Describe what this vendor will provide</label>
                <textarea
                  className={`form-control ${stepValidation.vendor_used_for ? 'error' : ''}`}
                  value={formData.vendor_used_for}
                  onChange={(e) => handleInputChange('vendor_used_for', e.target.value)}
                  rows="4"
                  placeholder="e.g., IT consulting services, office supplies, equipment maintenance, catering services..."
                />
                <small className="form-help">Be specific about the products, services, or solutions this vendor offers</small>
                {stepValidation.vendor_used_for && (
                  <div className="error-message">{stepValidation.vendor_used_for}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">What's the priority level for setting up this vendor?</label>
                <div className="priority-options">
                  {[
                    { value: 'low', label: 'Low Priority', desc: 'No rush, standard processing' },
                    { value: 'medium', label: 'Medium Priority', desc: 'Normal business need' },
                    { value: 'high', label: 'High Priority', desc: 'Important business need' },
                    { value: 'urgent', label: 'Urgent', desc: 'Critical - need immediate setup' }
                  ].map(priority => (
                    <div key={priority.value} className="priority-option">
                      <input
                        type="radio"
                        id={`priority_${priority.value}`}
                        name="priority"
                        value={priority.value}
                        checked={formData.priority === priority.value}
                        onChange={(e) => handleInputChange('priority', e.target.value)}
                      />
                      <label htmlFor={`priority_${priority.value}`}>
                        <strong>{priority.label}</strong>
                        <small>{priority.desc}</small>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 9: // Review & Submit
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>Review Your Information</h2>
              <p>Please review all the details before submitting your vendor request.</p>
            </div>
            
            <div className="review-section">
              <div className="review-card">
                <h3>Vendor Information</h3>
                <div className="review-item">
                  <strong>Legal Name:</strong> {formData.vendor_name}
                  {formData.vendor_name_2 && <div><strong>Alternate Name:</strong> {formData.vendor_name_2}</div>}
                  {formData.vendor_name_3 && <div><strong>Additional Name:</strong> {formData.vendor_name_3}</div>}
                </div>
              </div>

              <div className="review-card">
                <h3>Tax Information</h3>
                <div className="review-item">
                  {formData.w9_ssn && <div><strong>SSN:</strong> ***-**-{formData.w9_ssn.slice(-4)}</div>}
                  {formData.w9_ein && <div><strong>EIN:</strong> {formData.w9_ein}</div>}
                </div>
              </div>

              <div className="review-card">
                <h3>Contact Information</h3>
                <div className="review-item">
                  {formData.vendor_contact && <div><strong>Contact:</strong> {formData.vendor_contact}</div>}
                  {formData.vendor_phone && <div><strong>Phone:</strong> {formData.vendor_phone} {formData.vendor_phone_ext && `ext. ${formData.vendor_phone_ext}`}</div>}
                  {formData.vendor_email && <div><strong>Email:</strong> {formData.vendor_email}</div>}
                  {formData.vendor_fax && <div><strong>Fax:</strong> {formData.vendor_fax}</div>}
                </div>
              </div>

              <div className="review-card">
                <h3>Address</h3>
                <div className="review-item">
                  {formData.remit_address && <div>{formData.remit_address}</div>}
                  {(formData.city || formData.state || formData.zip_code) && (
                    <div>{[formData.city, formData.state, formData.zip_code].filter(Boolean).join(', ')}</div>
                  )}
                </div>
              </div>

              <div className="review-card">
                <h3>Classifications & Certifications</h3>
                <div className="review-item">
                  {formData.category_code && <div><strong>Category:</strong> {formData.category_code}</div>}
                  {formData.category_description && <div>{formData.category_description}</div>}
                  {formData.minority_owned && <div>✓ Minority Owned Business</div>}
                  {formData.wbe_vendor && <div>✓ Women Business Enterprise</div>}
                  {formData.mastercard_accepted && <div>✓ Accepts Mastercard</div>}
                  {formData.replacing_vendor && (
                    <div><strong>Replacing:</strong> {formData.replacing_vendor_name} ({formData.replacing_vendor_id})</div>
                  )}
                </div>
              </div>

              <div className="review-card">
                <h3>Vendor Purpose</h3>
                <div className="review-item">
                  <div><strong>Will be used for:</strong> {formData.vendor_used_for}</div>
                  <div><strong>Priority:</strong> <span className={`priority-${formData.priority}`}>{formData.priority.toUpperCase()}</span></div>
                </div>
              </div>
            </div>

            {error && (
              <div className="alert alert-error">
                {error}
              </div>
            )}

            {success && (
              <div className="alert alert-success">
                {success}
                <div className="mt-2">
                  <button className="btn btn-primary" onClick={() => window.location.hash = 'tracking'}>
                    View My Requests
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const renderNavigationButtons = () => {
    if (success) {
      return (
        <div className="step-navigation">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => {
              setSuccess('');
              setCurrentStep(0);
            }}
          >
            Submit Another Request
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => window.location.hash = 'lookup'}
          >
            Back to Vendor Lookup
          </button>
        </div>
      );
    }

    return (
      <div className="step-navigation">
        <div className="nav-left">
          <button 
            type="button" 
            className={`btn ${currentStep === 0 ? 'btn-disabled' : 'btn-secondary'}`}
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            &lt;&lt; Back
          </button>
        </div>
        <div className="nav-center">
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={() => window.location.hash = 'lookup'}
          >
            Cancel / Close
          </button>
        </div>
        <div className="nav-right">
          {currentStep < STEPS.length - 1 ? (
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={handleNext}
            >
              Next &gt;&gt;
            </button>
          ) : (
            <button 
              type="button" 
              className="btn btn-success"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Request 🚀'}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="vendor-request-wizard">
      <div className="wizard-container">
        <div className="wizard-header">
          <h1>New Vendor Setup Wizard</h1>
          <p>We'll guide you through adding a new vendor step by step</p>
        </div>

        {renderProgressBar()}
        {renderStep()}
        {renderNavigationButtons()}
      </div>
    </div>
  );
}