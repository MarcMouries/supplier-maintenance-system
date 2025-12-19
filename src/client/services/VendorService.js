// Service for vendor-related API operations
export class VendorService {
  constructor() {
    this.vendorTable = "x_snc_vendor_mto0s_vendor";
    this.requestTable = "x_snc_vendor_mto0s_vendor_request";
    this.baseHeaders = {
      "Accept": "application/json",
      "X-UserToken": window.g_ck
    };
  }

  async searchVendors(searchParams = {}) {
    try {
      const queryParams = new URLSearchParams({
        sysparm_display_value: 'all',
        sysparm_limit: '50'
      });

      // Add search filters if provided
      if (searchParams.name) {
        queryParams.append('sysparm_query', `vendor_nameLIKE${searchParams.name}`);
      }
      if (searchParams.id) {
        queryParams.append('sysparm_query', `vendor_id=${searchParams.id}`);
      }
      if (searchParams.ssn) {
        queryParams.append('sysparm_query', `w9_ssn=${searchParams.ssn}`);
      }
      if (searchParams.ein) {
        queryParams.append('sysparm_query', `w9_ein=${searchParams.ein}`);
      }

      const response = await fetch(`/api/now/table/${this.vendorTable}?${queryParams}`, {
        headers: this.baseHeaders
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to search vendors');
      }

      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error searching vendors:', error);
      throw error;
    }
  }

  async createVendorRequest(requestData) {
    try {
      const response = await fetch(`/api/now/table/${this.requestTable}?sysparm_display_value=all`, {
        method: 'POST',
        headers: {
          ...this.baseHeaders,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to create vendor request');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating vendor request:', error);
      throw error;
    }
  }

  async getVendorRequests(filters = {}) {
    try {
      const queryParams = new URLSearchParams({
        sysparm_display_value: 'all',
        sysparm_limit: '100',
        sysparm_query: 'ORDERBYDESCsys_created_on'
      });

      // Add status filter if provided
      if (filters.status) {
        queryParams.set('sysparm_query', `request_status=${filters.status}^ORDERBYDESCsys_created_on`);
      }

      // Add requester filter if provided
      if (filters.requester) {
        const existingQuery = queryParams.get('sysparm_query');
        queryParams.set('sysparm_query', `requested_by=${filters.requester}^${existingQuery}`);
      }

      const response = await fetch(`/api/now/table/${this.requestTable}?${queryParams}`, {
        headers: this.baseHeaders
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to fetch vendor requests');
      }

      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching vendor requests:', error);
      throw error;
    }
  }

  async updateVendorRequest(sysId, updateData) {
    try {
      const response = await fetch(`/api/now/table/${this.requestTable}/${sysId}?sysparm_display_value=all`, {
        method: 'PATCH',
        headers: {
          ...this.baseHeaders,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to update vendor request');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating vendor request:', error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const response = await fetch('/api/now/table/sys_user?sysparm_query=user_name=javascript:gs.getUserName()&sysparm_display_value=all', {
        headers: this.baseHeaders
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to get current user');
      }

      const data = await response.json();
      return data.result?.[0] || null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }
}