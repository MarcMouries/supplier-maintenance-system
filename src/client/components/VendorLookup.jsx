import React, { useState } from 'react';
import { display, value } from '../utils/fields.js';

export default function VendorLookup({ service }) {
  const [searchParams, setSearchParams] = useState({
    name: '',
    id: '',
    ssn: '',
    ein: '',
    address: ''
  });
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearchParamChange = (field, value) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    
    try {
      const results = await service.searchVendors(searchParams);
      setVendors(results);
    } catch (err) {
      setError('Failed to search vendors. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSearchParams({
      name: '',
      id: '',
      ssn: '',
      ein: '',
      address: ''
    });
    setVendors([]);
    setError('');
  };

  const formatAddress = (vendor) => {
    const parts = [
      display(vendor.remit_address),
      display(vendor.city),
      display(vendor.state),
      display(vendor.zip_code)
    ].filter(Boolean);
    
    return parts.join(', ');
  };

  return (
    <div className="vendor-lookup">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Vendor Lookup</h2>
          <p className="card-subtitle">Search and display existing vendors</p>
        </div>

        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        <div className="search-section">
          <div className="search-filters">
            <div className="form-group">
              <label className="form-label">Vendor Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vendor name"
                value={searchParams.name}
                onChange={(e) => handleSearchParamChange('name', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Vendor ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vendor ID"
                value={searchParams.id}
                onChange={(e) => handleSearchParamChange('id', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">SSN</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter SSN"
                value={searchParams.ssn}
                onChange={(e) => handleSearchParamChange('ssn', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">EIN</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter EIN"
                value={searchParams.ein}
                onChange={(e) => handleSearchParamChange('ein', e.target.value)}
              />
            </div>
          </div>
          
          <div className="search-actions">
            <button className="btn btn-secondary" onClick={handleClear}>
              Clear
            </button>
            <button 
              className="btn btn-primary" 
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>

        {loading && (
          <div className="loading">
            <div className="loading-spinner"></div>
            Searching vendors...
          </div>
        )}

        {vendors.length > 0 && (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Vendor Name</th>
                  <th>Vendor ID</th>
                  <th>Contact</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map(vendor => (
                  <tr key={value(vendor.sys_id)}>
                    <td>
                      <strong>{display(vendor.vendor_name)}</strong>
                      {display(vendor.vendor_name_2) && (
                        <div style={{ fontSize: '0.85em', color: '#6c757d' }}>
                          {display(vendor.vendor_name_2)}
                        </div>
                      )}
                    </td>
                    <td>{display(vendor.vendor_id)}</td>
                    <td>{display(vendor.vendor_contact)}</td>
                    <td>
                      {display(vendor.vendor_phone)}
                      {display(vendor.vendor_phone_ext) && (
                        <span> ext. {display(vendor.vendor_phone_ext)}</span>
                      )}
                    </td>
                    <td>{display(vendor.vendor_email)}</td>
                    <td>{formatAddress(vendor)}</td>
                    <td>
                      <span className={`status-badge status-${display(vendor.status)?.replace(/\s+/g, '-').toLowerCase()}`}>
                        {display(vendor.status)}
                      </span>
                    </td>
                    <td>
                      {display(vendor.category_code)}
                      {display(vendor.category_description) && (
                        <div style={{ fontSize: '0.85em', color: '#6c757d' }}>
                          {display(vendor.category_description)}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && vendors.length === 0 && searchParams.name && (
          <div className="alert alert-info">
            No vendors found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}