import '@servicenow/sdk/global'
import { Table, StringColumn, BooleanColumn, DateColumn } from '@servicenow/sdk/core'

// Vendor master table - stores approved vendor records
export const x_snc_vendor_mto0s_vendor = Table({
  name: 'x_snc_vendor_mto0s_vendor',
  label: 'Vendor',
  schema: {
    vendor_name: StringColumn({ 
      label: 'Vendor Name',
      maxLength: 255,
      mandatory: true
    }),
    vendor_name_2: StringColumn({
      label: 'Vendor Name 2',
      maxLength: 255
    }),
    vendor_name_3: StringColumn({
      label: 'Vendor Name 3', 
      maxLength: 255
    }),
    vendor_id: StringColumn({
      label: 'Vendor ID',
      maxLength: 50
    }),
    w9_ssn: StringColumn({
      label: 'W9 Social Security Number (SSN)',
      maxLength: 11
    }),
    w9_ein: StringColumn({
      label: 'W9 Employer Identification Number (EIN)',
      maxLength: 10
    }),
    vendor_contact: StringColumn({
      label: 'Vendor Contact',
      maxLength: 255
    }),
    vendor_phone: StringColumn({
      label: 'Vendor Phone',
      maxLength: 20
    }),
    vendor_phone_ext: StringColumn({
      label: 'Vendor Phone Ext',
      maxLength: 10
    }),
    vendor_fax: StringColumn({
      label: 'Vendor Fax',
      maxLength: 20
    }),
    vendor_email: StringColumn({
      label: 'Vendor Email Address',
      maxLength: 255
    }),
    remit_address: StringColumn({
      label: 'Remit to Address',
      maxLength: 500
    }),
    city: StringColumn({
      label: 'City',
      maxLength: 100
    }),
    state: StringColumn({
      label: 'State',
      maxLength: 50
    }),
    zip_code: StringColumn({
      label: 'Zip Code',
      maxLength: 10
    }),
    trade_station: StringColumn({
      label: 'Trade Station',
      maxLength: 50
    }),
    group_key: StringColumn({
      label: 'Group Key',
      maxLength: 50
    }),
    category_code: StringColumn({
      label: 'Category Code',
      maxLength: 50
    }),
    category_description: StringColumn({
      label: 'Category Code Description',
      maxLength: 255
    }),
    minority_owned: BooleanColumn({
      label: 'Minority Owned?',
      default: false
    }),
    wbe_vendor: BooleanColumn({
      label: 'WBE Vendor?',
      default: false
    }),
    mastercard_accepted: BooleanColumn({
      label: 'Mastercard Accepted?',
      default: false
    }),
    certificate_number: StringColumn({
      label: 'Certificate Number',
      maxLength: 100
    }),
    certificate_expiration: DateColumn({
      label: 'Certificate Expiration Date'
    }),
    vendor_used_for: StringColumn({
      label: 'Vendor Used For',
      maxLength: 500
    }),
    status: StringColumn({
      label: 'Status',
      default: 'active',
      choices: {
        active: { label: 'Active', sequence: 0 },
        inactive: { label: 'Inactive', sequence: 1 },
        pending_approval: { label: 'Pending Approval', sequence: 2 },
        rejected: { label: 'Rejected', sequence: 3 }
      },
      dropdown: 'dropdown_with_none'
    })
  },
  display: 'vendor_name',
  extensible: false,
  allow_web_service_access: true,
  actions: ['create', 'read', 'update', 'delete'],
  accessible_from: 'public'
})