import { gs, GlideDateTime } from '@servicenow/glide'

export function setRequestDefaults(current) {
  // Set default priority if not specified
  if (!current.getValue('priority')) {
    current.setValue('priority', 'medium')
  }

  // Set requested_on if not already set
  if (!current.getValue('requested_on')) {
    current.setValue('requested_on', new GlideDateTime().getDisplayValue())
  }

  // Set initial status if not specified
  if (!current.getValue('request_status')) {
    current.setValue('request_status', 'new')
  }
}

export function notifyRequestCreated(current) {
  const requestNumber = current.getValue('request_number') || 'Unknown'
  const vendorName = current.getValue('vendor_name') || 'Unknown Vendor'
  
  gs.addInfoMessage(`Vendor request ${requestNumber} for "${vendorName}" has been created successfully.`)
}