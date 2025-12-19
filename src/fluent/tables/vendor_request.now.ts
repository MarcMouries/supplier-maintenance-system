import '@servicenow/sdk/global'
import { Table, StringColumn, BooleanColumn, DateColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

// Vendor request table - stores new vendor requests and tracks status
export const x_snc_vendor_mto0s_vendor_request = Table({
  name: 'x_snc_vendor_mto0s_vendor_request',
  label: 'Vendor Request',
  schema: {
    request_number: StringColumn({
      label: 'Request Number',
      maxLength: 40,
      read_only: true
    }),
    vendor_name: StringColumn({
      label: 'New Vendor Name',
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
    replacing_vendor: BooleanColumn({
      label: 'Replacing Vendor?',
      default: false
    }),
    replacing_vendor_name: StringColumn({
      label: 'Replacing Vendor Name',
      maxLength: 255
    }),
    replacing_vendor_id: StringColumn({
      label: 'Replacing Vendor ID',
      maxLength: 50
    }),
    vendor_used_for: StringColumn({
      label: 'Vendor Used For',
      maxLength: 500
    }),
    request_status: StringColumn({
      label: 'Status',
      default: 'new',
      choices: {
        new: { label: 'New', sequence: 0 },
        in_review: { label: 'In Review', sequence: 1 },
        pending_approval: { label: 'Pending Approval', sequence: 2 },
        approved: { label: 'Approved', sequence: 3 },
        rejected: { label: 'Rejected', sequence: 4 },
        completed: { label: 'Completed', sequence: 5 }
      },
      dropdown: 'dropdown_with_none'
    }),
    requested_by: ReferenceColumn({
      label: 'Requested By',
      referenceTable: 'sys_user',
      mandatory: true
    }),
    requested_on: DateTimeColumn({
      label: 'Requested On',
      default: 'javascript:gs.nowDateTime()',
      read_only: true
    }),
    assigned_to: ReferenceColumn({
      label: 'Assigned To',
      referenceTable: 'sys_user'
    }),
    approval_notes: StringColumn({
      label: 'Approval Notes',
      maxLength: 1000
    }),
    priority: StringColumn({
      label: 'Priority',
      default: 'medium',
      choices: {
        low: { label: 'Low', sequence: 0 },
        medium: { label: 'Medium', sequence: 1 },
        high: { label: 'High', sequence: 2 },
        urgent: { label: 'Urgent', sequence: 3 }
      },
      dropdown: 'dropdown_without_none'
    })
  },
  display: 'vendor_name',
  extensible: false,
  allow_web_service_access: true,
  actions: ['create', 'read', 'update', 'delete'],
  accessible_from: 'public',
  auto_number: {
    prefix: 'VR',
    number: 1000,
    number_of_digits: 7
  }
})