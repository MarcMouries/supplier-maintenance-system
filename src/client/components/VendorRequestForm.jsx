import React, { useState } from 'react';
import { value } from '../utils/fields.js';

export default function VendorRequestForm({ service, currentUser }) {
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

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (field, inputValue) => {
    setFormData(prev => ({
      ...prev,
      [field]: inputValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.vendor_name.trim()) {
      setError('Vendor Name is required.');
      return;
    }

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
      setSuccess(`Vendor request ${result.result?.request_number || 'created'} successfully submitted!`);
      
      // Reset form
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

    } catch (err) {
      setError('Failed to submit vendor request. Please try again.');
      console.error('Submit error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    // Navigate back or reset form
    window.location.hash = 'lookup';
  };

  return (
    <div className="vendor-request-form">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Process: New Vendor</h2>
          <p className="card-subtitle">Supplier Maintenance Request</p>
        </div>

        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {success && (
          <div className="alert alert-success">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Vendor Information Section */}
            <div className="form-section">
              <h3 className="form-section-title">Vendor Information</h3>
              <p style={{ fontSize: '0.9em', color: '#dc3545', marginBottom: '1rem' }}>
                <strong>NOTE:</strong> You must enter the Vendor Name exactly 
                how it appears in legal documents, such as W-9 tax certificates of insurance.
              </p>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label required">New Vendor Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.vendor_name}
                    onChange={(e) => handleInputChange('vendor_name', e.target.value)}
                    placeholder="Enter exact legal vendor name"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Vendor Name 2</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.vendor_name_2}
                    onChange={(e) => handleInputChange('vendor_name_2', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Vendor Name 3</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.vendor_name_3}
                    onChange={(e) => handleInputChange('vendor_name_3', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">W9 Social Security Number (SSN)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.w9_ssn}
                    onChange={(e) => handleInputChange('w9_ssn', e.target.value)}
                    placeholder="XXX-XX-XXXX"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">W9 Employer Identification Number (EIN)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.w9_ein}
                    onChange={(e) => handleInputChange('w9_ein', e.target.value)}
                    placeholder="XX-XXXXXXX"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="form-section">
              <h3 className="form-section-title">Contact Information</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Vendor Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.vendor_contact}
                    onChange={(e) => handleInputChange('vendor_contact', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Vendor Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.vendor_phone}
                    onChange={(e) => handleInputChange('vendor_phone', e.target.value)}
                    placeholder="(XXX) XXX-XXXX"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Vendor Phone Ext</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.vendor_phone_ext}
                    onChange={(e) => handleInputChange('vendor_phone_ext', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Vendor Fax</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.vendor_fax}
                    onChange={(e) => handleInputChange('vendor_fax', e.target.value)}
                    placeholder="(XXX) XXX-XXXX"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Vendor Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formData.vendor_email}
                    onChange={(e) => handleInputChange('vendor_email', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Address Information Section */}
            <div className="form-section">
              <h3 className="form-section-title">Address Information</h3>
              
              <div className="form-row">
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Remit to Address</label>
                  <textarea
                    className="form-control"
                    value={formData.remit_address}
                    onChange={(e) => handleInputChange('remit_address', e.target.value)}
                    rows="3"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.zip_code}
                    onChange={(e) => handleInputChange('zip_code', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Category and Classification Section */}
            <div className="form-section">
              <h3 className="form-section-title">Category $[AMP] Classification</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Trade Station</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.trade_station}
                    onChange={(e) => handleInputChange('trade_station', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Group Key</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.group_key}
                    onChange={(e) => handleInputChange('group_key', e.target.value)}
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
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category Code Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.category_description}
                    onChange={(e) => handleInputChange('category_description', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Special Classifications Section */}
            <div className="form-section">
              <h3 className="form-section-title">Special Classifications</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="minority_owned"
                      checked={formData.minority_owned}
                      onChange={(e) => handleInputChange('minority_owned', e.target.checked)}
                    />
                    <label htmlFor="minority_owned" className="form-label">Minority Owned?</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="wbe_vendor"
                      checked={formData.wbe_vendor}
                      onChange={(e) => handleInputChange('wbe_vendor', e.target.checked)}
                    />
                    <label htmlFor="wbe_vendor" className="form-label">WBE Vendor?</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="mastercard_accepted"
                      checked={formData.mastercard_accepted}
                      onChange={(e) => handleInputChange('mastercard_accepted', e.target.checked)}
                    />
                    <label htmlFor="mastercard_accepted" className="form-label">Mastercard Accepted?</label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Certificate Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.certificate_number}
                    onChange={(e) => handleInputChange('certificate_number', e.target.value)}
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

            {/* Replacing Vendor Section */}
            <div className="form-section">
              <h3 className="form-section-title">Vendor Replacement</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="replacing_vendor"
                      checked={formData.replacing_vendor}
                      onChange={(e) => handleInputChange('replacing_vendor', e.target.checked)}
                    />
                    <label htmlFor="replacing_vendor" className="form-label">Replacing Vendor?</label>
                  </div>
                </div>
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
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Replacing Vendor ID</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.replacing_vendor_id}
                      onChange={(e) => handleInputChange('replacing_vendor_id', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Usage and Priority Section */}
            <div className="form-section">
              <h3 className="form-section-title">Usage $[AMP] Priority</h3>
              
              <div className="form-row">
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Vendor Used For</label>
                  <textarea
                    className="form-control"
                    value={formData.vendor_used_for}
                    onChange={(e) => handleInputChange('vendor_used_for', e.target.value)}
                    rows="3"
                    placeholder="Describe what products/services this vendor will provide"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Priority</label>
                  <select
                    className="form-select"
                    value={formData.priority}
                    onChange={(e) => handleInputChange('priority', e.target.value)}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-group">
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel/Close
            </button>
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Next >>'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}