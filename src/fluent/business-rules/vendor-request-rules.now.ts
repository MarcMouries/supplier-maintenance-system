import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { setRequestDefaults, notifyRequestCreated } from '../../server/vendor-request-rules.js'

// Business rule to set default values for new vendor requests
export const setVendorRequestDefaults = BusinessRule({
  $id: Now.ID['br-vendor-request-defaults'],
  name: 'Set Vendor Request Defaults',
  table: 'x_snc_vendor_mto0s_vendor_request',
  when: 'before',
  action: ['insert'],
  script: setRequestDefaults,
  order: 100,
  active: true,
  description: 'Sets default values for new vendor requests including priority and status'
})

// Business rule to notify users when a vendor request is created
export const notifyVendorRequestCreated = BusinessRule({
  $id: Now.ID['br-vendor-request-notify'],
  name: 'Notify Vendor Request Created', 
  table: 'x_snc_vendor_mto0s_vendor_request',
  when: 'after',
  action: ['insert'],
  script: notifyRequestCreated,
  order: 200,
  active: true,
  addMessage: true,
  description: 'Shows notification message when a new vendor request is created'
})