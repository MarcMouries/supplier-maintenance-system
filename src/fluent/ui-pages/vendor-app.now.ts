import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import vendorApp from '../../client/index.html'

export const vendor_management_app = UiPage({
  $id: Now.ID['vendor-management-app'],
  endpoint: 'x_snc_sms_app.do',
  html: vendorApp,
  direct: true
})