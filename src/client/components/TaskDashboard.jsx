import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function TaskDashboard({ service, currentUser }) {
  const [myTasks, setMyTasks] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentUser) {
      fetchMyTasks();
    }
  }, [currentUser]);

  const fetchMyTasks = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Get requests assigned to current user
      const assignedRequests = await service.getVendorRequests({
        requester: value(currentUser?.sys_id)
      });

      // Filter for requests that need action
      const actionableRequests = assignedRequests.filter(request => {
        const status = display(request.request_status);
        return ['new', 'in_review', 'pending_approval'].includes(status);
      });

      setMyTasks(actionableRequests);

      // Generate alerts for high priority or overdue items
      const alertItems = actionableRequests.filter(request => {
        const priority = display(request.priority);
        const createdDate = new Date(display(request.requested_on));
        const daysSinceCreated = (new Date() - createdDate) / (1000 * 60 * 60 * 24);
        
        return priority === 'urgent' || priority === 'high' || daysSinceCreated > 3;
      });

      setAlerts(alertItems);

    } catch (err) {
      setError('Failed to load tasks. Please try again.');
      console.error('Task fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAssignToMe = async (requestId) => {
    try {
      await service.updateVendorRequest(requestId, { 
        assigned_to: value(currentUser?.sys_id) 
      });
      
      // Refresh tasks
      fetchMyTasks();
      
    } catch (err) {
      setError('Failed to assign task. Please try again.');
      console.error('Assign error:', err);
    }
  };

  const handleStatusUpdate = async (requestId, newStatus) => {
    try {
      await service.updateVendorRequest(requestId, { 
        request_status: newStatus 
      });
      
      // Refresh tasks
      fetchMyTasks();
      
    } catch (err) {
      setError('Failed to update status. Please try again.');
      console.error('Update error:', err);
    }
  };

  const getTaskPriority = (request) => {
    const priority = display(request.priority);
    const createdDate = new Date(display(request.requested_on));
    const daysSinceCreated = (new Date() - createdDate) / (1000 * 60 * 60 * 24);
    
    if (priority === 'urgent') return 'urgent';
    if (priority === 'high' || daysSinceCreated > 7) return 'high';
    if (daysSinceCreated > 3) return 'medium';
    return 'low';
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const getDaysOld = (dateString) => {
    if (!dateString) return 0;
    const date = new Date(dateString);
    return Math.floor((new Date() - date) / (1000 * 60 * 60 * 24));
  };

  if (!currentUser) {
    return (
      <div className="task-dashboard">
        <div className="card">
          <div className="alert alert-warning">
            Please log in to view your task dashboard.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="task-dashboard">
      {/* Alerts Section */}
      {alerts.length > 0 && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title" style={{ color: '#dc3545' }}>
              🚨 Alerts $[AMP] Urgent Items
            </h2>
            <p className="card-subtitle">Items requiring immediate attention</p>
          </div>

          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Alert Type</th>
                  <th>Request #</th>
                  <th>Vendor Name</th>
                  <th>Priority</th>
                  <th>Days Old</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map(request => {
                  const daysOld = getDaysOld(display(request.requested_on));
                  const priority = display(request.priority);
                  
                  return (
                    <tr key={value(request.sys_id)} style={{ backgroundColor: '#fff5f5' }}>
                      <td>
                        {priority === 'urgent' && '🔴 Urgent Priority'}
                        {priority === 'high' && '🟠 High Priority'}
                        {daysOld > 7 && '⏰ Overdue (>7 days)'}
                        {daysOld > 3 && daysOld <= 7 && '⚠️ Aging (>3 days)'}
                      </td>
                      <td>
                        <strong>{display(request.request_number)}</strong>
                      </td>
                      <td>{display(request.vendor_name)}</td>
                      <td>
                        <span className={`status-badge priority-${priority?.toLowerCase()}`}>
                          {priority}
                        </span>
                      </td>
                      <td>
                        <strong style={{ color: daysOld > 7 ? '#dc3545' : '#f57c00' }}>
                          {daysOld} days
                        </strong>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => window.location.hash = 'tracking'}
                        >
                          Review Now
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Main Task Management Section */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">My Task Dashboard</h2>
          <p className="card-subtitle">
            Manage assigned tasks and vendor requests requiring action
          </p>
        </div>

        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {loading && (
          <div className="loading">
            <div className="loading-spinner"></div>
            Loading your tasks...
          </div>
        )}

        {!loading && myTasks.length === 0 && (
          <div className="alert alert-success">
            🎉 Great job! You have no pending vendor requests assigned to you.
          </div>
        )}

        {!loading && myTasks.length > 0 && (
          <>
            <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>
                📋 Task Summary
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <strong>Total Tasks:</strong> {myTasks.length}
                </div>
                <div>
                  <strong>High Priority:</strong> {myTasks.filter(r => ['high', 'urgent'].includes(display(r.priority))).length}
                </div>
                <div>
                  <strong>New Requests:</strong> {myTasks.filter(r => display(r.request_status) === 'new').length}
                </div>
                <div>
                  <strong>In Review:</strong> {myTasks.filter(r => display(r.request_status) === 'in_review').length}
                </div>
              </div>
            </div>

            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Task Priority</th>
                    <th>Request #</th>
                    <th>Vendor Name</th>
                    <th>Status</th>
                    <th>Requested</th>
                    <th>Days Old</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myTasks
                    .sort((a, b) => {
                      // Sort by priority first, then by date
                      const priorityOrder = { 'urgent': 4, 'high': 3, 'medium': 2, 'low': 1 };
                      const aPriority = priorityOrder[display(a.priority)] || 1;
                      const bPriority = priorityOrder[display(b.priority)] || 1;
                      
                      if (aPriority !== bPriority) return bPriority - aPriority;
                      
                      return new Date(display(a.requested_on)) - new Date(display(b.requested_on));
                    })
                    .map(request => {
                      const daysOld = getDaysOld(display(request.requested_on));
                      const taskPriority = getTaskPriority(request);
                      const status = display(request.request_status);
                      
                      return (
                        <tr key={value(request.sys_id)}>
                          <td>
                            <span className={`status-badge priority-${taskPriority}`}>
                              {taskPriority.toUpperCase()}
                            </span>
                          </td>
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
                            </div>
                          </td>
                          <td>
                            <span className={`status-badge status-${status?.replace(/\s+/g, '-').toLowerCase()}`}>
                              {status}
                            </span>
                          </td>
                          <td>{formatDate(display(request.requested_on))}</td>
                          <td>
                            <strong style={{ 
                              color: daysOld > 7 ? '#dc3545' : 
                                     daysOld > 3 ? '#f57c00' : '#28a745'
                            }}>
                              {daysOld} days
                            </strong>
                          </td>
                          <td>
                            <div className="table-actions">
                              {!display(request.assigned_to) && (
                                <button
                                  className="btn btn-warning"
                                  onClick={() => handleAssignToMe(value(request.sys_id))}
                                >
                                  Assign to Me
                                </button>
                              )}
                              
                              {status === 'new' && (
                                <button
                                  className="btn btn-primary"
                                  onClick={() => handleStatusUpdate(value(request.sys_id), 'in_review')}
                                >
                                  Start Review
                                </button>
                              )}
                              
                              {status === 'in_review' && (
                                <>
                                  <button
                                    className="btn btn-success"
                                    onClick={() => handleStatusUpdate(value(request.sys_id), 'pending_approval')}
                                  >
                                    Send for Approval
                                  </button>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => handleStatusUpdate(value(request.sys_id), 'rejected')}
                                  >
                                    Reject
                                  </button>
                                </>
                              )}
                              
                              <button
                                className="btn btn-secondary"
                                onClick={() => window.location.hash = 'tracking'}
                              >
                                View Details
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}