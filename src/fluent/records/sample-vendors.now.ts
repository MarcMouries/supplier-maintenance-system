import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample vendor records for testing
export const vendor1 = Record({
  $id: Now.ID['vendor-sample-1'],
  table: 'x_snc_sms_vendor',
  data: {
    vendor_name: 'ABC Consulting Services Inc.',
    vendor_name_2: 'ABC Consulting',
    vendor_id: 'V001',
    w9_ein: '12-3456789',
    vendor_contact: 'John Smith',
    vendor_phone: '(555) 123-4567',
    vendor_phone_ext: '101',
    vendor_email: 'john.smith@abcconsulting.com',
    remit_address: '123 Business Way, Suite 100',
    city: 'New York',
    state: 'NY',
    zip_code: '10001',
    category_code: 'CONSULTING',
    category_description: 'Professional Consulting Services',
    minority_owned: false,
    wbe_vendor: false,
    mastercard_accepted: true,
    vendor_used_for: 'IT consulting and project management services',
    status: 'active'
  }
})

export const vendor2 = Record({
  $id: Now.ID['vendor-sample-2'],
  table: 'x_snc_sms_vendor',
  data: {
    vendor_name: 'Global Supply Solutions LLC',
    vendor_id: 'V002',
    w9_ssn: '123-45-6789',
    vendor_contact: 'Maria Rodriguez',
    vendor_phone: '(555) 987-6543',
    vendor_email: 'maria.rodriguez@globalsupply.com',
    remit_address: '456 Industrial Drive',
    city: 'Chicago',
    state: 'IL',
    zip_code: '60601',
    category_code: 'SUPPLY',
    category_description: 'Office Supplies and Equipment',
    minority_owned: true,
    wbe_vendor: true,
    mastercard_accepted: true,
    vendor_used_for: 'Office supplies, furniture, and equipment procurement',
    status: 'active'
  }
})

export const vendor3 = Record({
  $id: Now.ID['vendor-sample-3'],
  table: 'x_snc_sms_vendor',
  data: {
    vendor_name: 'TechFix Repair Services',
    vendor_id: 'V003',
    w9_ein: '98-7654321',
    vendor_contact: 'David Chen',
    vendor_phone: '(555) 555-0123',
    vendor_phone_ext: '200',
    vendor_fax: '(555) 555-0124',
    vendor_email: 'david.chen@techfixrepair.com',
    remit_address: '789 Tech Boulevard, Building A',
    city: 'San Francisco',
    state: 'CA',
    zip_code: '94102',
    trade_station: 'TS001',
    group_key: 'TECH',
    category_code: 'REPAIR',
    category_description: 'Computer and Electronics Repair',
    minority_owned: false,
    wbe_vendor: false,
    mastercard_accepted: false,
    certificate_number: 'CERT-2024-001',
    certificate_expiration: '2024-12-31',
    vendor_used_for: 'Computer hardware repair and maintenance services',
    status: 'active'
  }
})