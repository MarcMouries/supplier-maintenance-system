import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function RequestTracking({ service, currentUser }) {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: '',
    requester: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async (filterParams = {}) => {
    setLoading(true);
    setError('');
    
    try {
      const results = await service.getVendorRequests(filterParams);
      setRequests(results);
    } catch (err) {
      setError('Failed to load vendor requests. Please try again.');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (field, filterValue) => {
    const newFilters = {
      ...filters,
      [field]: filterValue
    };
    setFilters(newFilters);
    
    // Apply filters immediately
    const filterParams = {};
    if (newFilters.status) filterParams.status = newFilters.status;
    if (newFilters.requester) filterParams.requester = newFilters.requester;
    
    fetchRequests(filterParams);
  };

  const handleClearFilters = () => {
    setFilters({ status: '', requester: '' });
    fetchRequests();
  };

  const handleStatusUpdate = async (requestId, newStatus) => {
    try {
      await service.updateVendorRequest(requestId, { request_status: newStatus });
      
      // Refresh the list
      const filterParams = {};
      if (filters.status) filterParams.status = filters.status;
      if (filters.requester) filterParams.requester = filters.requester;
      fetchRequests(filterParams);
      
    } catch (err) {
      setError('Failed to update request status. Please try again.');
      console.error('Update error:', err);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusActions = (request) => {
    const currentStatus = display(request.request_status);
    const actions = [];

    switch (currentStatus) {
      case 'new':
        actions.push(
          <button
            key="review"
            className="btn btn-warning"
            onClick={() => handleStatusUpdate(value(request.sys_id), 'in_review')}
          >
            Start Review
          </button>
        );
        break;
      case 'in_review':
        actions.push(
          <button
            key="approve"
            className="btn btn-success"
            onClick={() => handleStatusUpdate(value(request.sys_id), 'pending_approval')}
          >
            Send for Approval
          </button>,
          <button
            key="reject"
            className="btn btn-danger"
            onClick={() => handleStatusUpdate(value(request.sys_id), 'rejected')}
          >
            Reject
          </button>
        );
        break;
      case 'pending_approval':
        actions.push(
          <button
            key="approve"
            className="btn btn-success"
            onClick={() => handleStatusUpdate(value(request.sys_id), 'approved')}
          >
            Approve
          </button>,
          <button
            key="reject"
            className="btn btn-danger"
            onClick={() => handleStatusUpdate(value(request.sys_id), 'rejected')}
          >
            Reject
          </button>
        );
        break;
      case 'approved':
        actions.push(
          <button
            key="complete"
            className="btn btn-success"
            onClick={() => handleStatusUpdate(value(request.sys_id), 'completed')}
          >
            Mark Complete
          </button>
        );
        break;
    }

    return actions;
  };

  return (
    <div className="request-tracking">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Request Search/Tracking</h2>
          <p className="card-subtitle">View and filter vendor requests by status, requester, date, and vendor details</p>
        </div>

        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        <div className="search-section">
          <div className="search-filters">
            <div className="form-group">
              <label className="form-label">Filter by Status</label>
              <select
                className="form-select"
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="new">New</option>
                <option value="in_review">In Review</option>
                <option value="pending_approval">Pending Approval</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Show My Requests Only</label>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="my_requests"
                  checked={filters.requester === value(currentUser?.sys_id)}
                  onChange={(e) => 
                    handleFilterChange('requester', e.target.checked ? value(currentUser?.sys_id) : '')
                  }
                />
                <label htmlFor="my_requests" className="form-label">My Requests Only</label>
              </div>
            </div>
          </div>
          
          <div className="search-actions">
            <button className="btn btn-secondary" onClick={handleClearFilters}>
              Clear Filters
            </button>
          </div>
        </div>

        {loading && (
          <div className="loading">
            <div className="loading-spinner"></div>
            Loading vendor requests...
          </div>
        )}

        {!loading && requests.length > 0 && (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Request #</th>
                  <th>Vendor Name</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Requested By</th>
                  <th>Requested On</th>
                  <th>Assigned To</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map(request => (
                  <tr key={value(request.sys_id)}>
                    <td>
                      <strong>{display(request.request_number)}</strong>
                    </td>
                    <td>
                      <div>
                        <strong>{display(request.vendor_name)}</strong>
                        {display(request.vendor_contact) && (
                          <div style={{ fontSize: '0.85em', color: '#6c757d' }}>
                            Contact: {display(request.vendor_contact)}
                          </div>
                        )}
                        {display(request.vendor_email) && (
                          <div style={{ fontSize: '0.85em', color: '#6c757d' }}>
                            {display(request.vendor_email)}
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      <span className={`status-badge status-${display(request.request_status)?.replace(/\s+/g, '-').toLowerCase()}`}>
                        {display(request.request_status)}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge priority-${display(request.priority)?.toLowerCase()}`}>
                        {display(request.priority)}
                      </span>
                    </td>
                    <td>{display(request.requested_by)}</td>
                    <td>{formatDate(display(request.requested_on))}</td>
                    <td>{display(request.assigned_to) || 'Unassigned'}</td>
                    <td>
                      <div className="table-actions">
                        {getStatusActions(request)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && requests.length === 0 && (
          <div className="alert alert-info">
            No vendor requests found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}