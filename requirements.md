# Vendor Management System - Requirements Document

## Project Overview

The Supplier Maintenance Request (SMR) System is a comprehensive ServiceNow application designed to streamline vendor onboarding, tracking, and management processes. **SMR stands for "Supplier Maintenance Request"** - the formal process for requesting new suppliers/vendors to be added to the organization's system.

### SMR Process Definition
The SMR (Supplier Maintenance Request) is the official workflow used to request new vendors/suppliers. The process includes:
- CEO approval requirements for new vendors
- Model Market Vendor Exception Form submission
- Email documentation showing sector CEO approval
- Complete vendor information gathering and validation
- Integration with SAP and MyFinance systems when applicable The system provides a modern web-based interface with guided workflows for creating vendor requests, searching existing vendors, tracking request status, and managing assigned tasks. The application features the official Compass brand color palette throughout for consistent corporate branding.

## Official Compass Color Palette

**EXACT HEX CODES FROM BRAND SPECIFICATION:**

| Color Name | Hex Code | Usage |
|------------|----------|--------|
| **Compass Dark** | `#050E1F` | Primary text, headers, dark elements |
| **Compass Navy** | `#1E1E57` | Secondary backgrounds, gradients |
| **Compass Blue** | `#2E5299` | Primary buttons, active states, links |
| **Compass Light Blue** | `#3D7FD6` | Secondary accents, hover states |
| **Compass Teal** | `#56AEA7` | Success states, completed items, progress |
| **Compass Gold** | `#F0BD48` | Warnings, highlights, alerts, important notices |
| **Compass Light** | `#F0F3F4` | Background, containers, subtle areas |

**CSS Variables Implementation:**
```css
:root {
  --compass-dark: #050E1F;
  --compass-navy: #1E1E57;
  --compass-blue: #2E5299;
  --compass-light-blue: #3D7FD6;
  --compass-teal: #56AEA7;
  --compass-gold: #F0BD48;
  --compass-light: #F0F3F4;
}
```

**CRITICAL REQUIREMENT**: All application elements MUST use these exact hex codes. NO purple colors (#667eea, #764ba2) or other brand colors are permitted.

## Core Requirements

### 1. Vendor Lookup Screen
**Requirement**: Search and display existing vendors with comprehensive filtering capabilities using the main VendorLookup component.

**Features**:
- Advanced search functionality with multiple filter criteria
- Filter by vendor name, ID, SSN/EIN, and address
- Clean tabular display of search results with modern Compass-themed styling
- Real-time search capability with Enter key support
- Status badges and category information display
- Contact information and address formatting
- Responsive card-based layout with professional styling

**Technical Implementation**:
- React component with state management for search parameters
- ServiceNow Table API integration for vendor data retrieval
- Compass color scheme with proper branding
- Reusable component architecture for consistency

### 2. New Vendor Request Form
**Requirement**: Create new vendor requests with guided, 10-step wizard interface featuring Compass branding.

#### 2.1 Initial SMR Dialog (Step 1)
**Requirement**: Exact replica of the "SMR Request Dialog" with Compass color theming.

**Features**:
- Dialog header with Compass Blue-to-Navy gradient background
- Tab navigation: Start | Requested Process | Additional Info | Summary
- "New Vendor" process selection (pre-selected radio button)
- Process description section with policy explanation
- Required documents section with Compass Gold highlighting
- Navigation buttons with Compass color scheme

**Content Requirements**:
- Complete policy text about CEO approval requirements
- Links to vendor exception forms and qualification processes
- Required attachments checklist
- Technical vendor qualification process reference

#### 2.2 Vendor Lookup Integration (Step 2)
**Requirement**: Reuse main VendorLookup component within wizard for consistency.

**Features**:
- Identical search functionality as main lookup page
- Warning message about vendor availability and sector restrictions
- Guidance for users to search existing vendors before creating new ones
- Seamless integration with wizard navigation
- Professional styling matching main application

#### 2.3 Guided Wizard Steps (Steps 3-10)
**Requirement**: Multi-step wizard with progressive disclosure, validation, and Compass theming.

**Step 3 - Getting Started**: Basic vendor information
- Legal vendor name (required - exact as in legal documents)
- Alternate names (optional)
- Important note about legal name accuracy
- Compass-themed form elements

**Step 4 - Tax Information**: W9 tax identification
- SSN or EIN selection (one required)
- Clear explanation of which businesses use which ID type
- Secure data handling messaging
- Visual OR divider with proper styling

**Step 5 - Contact Details**: Communication information
- Primary contact person
- Phone number with extension
- Email address with validation
- Fax number (optional)
- Professional form layout with validation

**Step 6 - Address Information**: Payment address
- Remit-to address (multi-line)
- City, State, Zip code
- Clear explanation of payment address purpose

**Step 7 - Business Classification**: Category information
- Trade station and group key
- Category code and description
- Internal classification codes

**Step 8 - Certifications**: Special business certifications
- Minority Owned Business checkbox with Compass Teal accents
- Women Business Enterprise (WBE) checkbox
- Mastercard acceptance checkbox
- Certificate number and expiration date (conditional)
- Vendor replacement section with conditional fields

**Step 9 - Vendor Purpose**: Usage and priority
- Detailed description of vendor services (required)
- Priority level selection with visual indicators (Low, Medium, High, Urgent)
- Compass-themed priority options with proper styling

**Step 10 - Review & Submit**: Final confirmation
- Complete summary of all entered information in organized cards
- Masked SSN display for security
- Compass-themed review cards
- Submit functionality with success confirmation

### 3. Request Search/Tracking
**Requirement**: View and filter vendor requests by multiple criteria with Compass theming.

**Features**:
- Filter by request status, requester, date, and vendor details
- Status workflow management with action buttons
- Priority-based visual indicators using Compass colors
- Complete audit trail from request to completion
- Bulk actions for status updates
- Compass-themed status badges

**Status Workflow**:
- New → In Review → Pending Approval → Approved → Completed
- Rejected status available from any step
- Status-specific action buttons with proper color coding

### 4. Task Management Dashboard
**Requirement**: Display assigned tasks and alerts with Compass color scheme.

**Features**:
- Alerts section with Compass Gold highlighting for high-priority items
- Task summary with metrics and counts
- Assignment management with self-assignment capability
- Days aging tracking with color-coded indicators
- Quick actions for status updates and reviews
- Compass Teal for completed tasks, Blue for active tasks

## Visual Design & Branding Requirements

### 5.1 Compass Color Palette (Official Brand Colors)
**Primary Colors**:
- **Compass Dark**: `#050E1F` - Primary text, headers
- **Compass Navy**: `#1E1E57` - Secondary backgrounds, gradients
- **Compass Blue**: `#2E5299` - Primary buttons, active states
- **Compass Light Blue**: `#3D7FD6` - Links, secondary accents
- **Compass Teal**: `#56AEA7` - Success states, completed items
- **Compass Gold**: `#F0BD48` - Warnings, highlights, alerts
- **Compass Light**: `#F0F3F4` - Background, containers

### 5.2 Application Elements Using Compass Colors
- **Navigation Header**: Blue-to-Navy gradient
- **Wizard Header**: Blue-to-Navy gradient
- **Progress Steps**: Teal for completed, Blue for active
- **Primary Buttons**: Blue-to-Navy gradient
- **Success Elements**: Teal gradient
- **Warning Elements**: Gold backgrounds
- **Application Background**: Compass Light
- **Text Elements**: Compass Dark

### 5.3 Layout Requirements
- **Full-width wizard container** with no max-width constraints
- **Centered progress steps** for better visual balance
- **No progress fill bar** for cleaner step indicator design
- **Professional card-based layouts** with subtle shadows
- **Modern gradient themes** using Compass colors throughout

## Data Model Requirements

### 6.1 Vendor Table (`x_snc_vendor_mto0s_vendor`)
**Purpose**: Master vendor records storage

**Required Fields**:
- `vendor_name` (String, 255, Required) - Legal vendor name
- `vendor_name_2` (String, 255) - Alternate name
- `vendor_name_3` (String, 255) - Additional name variation
- `vendor_id` (String, 50) - Unique vendor identifier
- `w9_ssn` (String, 11) - Social Security Number
- `w9_ein` (String, 10) - Employer Identification Number
- `vendor_contact` (String, 255) - Primary contact person
- `vendor_phone` (String, 20) - Phone number
- `vendor_phone_ext` (String, 10) - Phone extension
- `vendor_fax` (String, 20) - Fax number
- `vendor_email` (String, 255) - Email address
- `remit_address` (String, 500) - Payment address
- `city` (String, 100) - City
- `state` (String, 50) - State
- `zip_code` (String, 10) - Zip code
- `trade_station` (String, 50) - Trade station code
- `group_key` (String, 50) - Group key identifier
- `category_code` (String, 50) - Category code
- `category_description` (String, 255) - Category description
- `minority_owned` (Boolean) - Minority owned flag
- `wbe_vendor` (Boolean) - Women business enterprise flag
- `mastercard_accepted` (Boolean) - Mastercard acceptance flag
- `certificate_number` (String, 100) - Certification number
- `certificate_expiration` (Date) - Certificate expiration
- `vendor_used_for` (String, 500) - Usage description
- `status` (Choice) - Active, Inactive, Pending Approval, Rejected

### 6.2 Vendor Request Table (`x_snc_vendor_mto0s_vendor_request`)
**Purpose**: New vendor request tracking and workflow

**Required Fields**: All vendor table fields plus:
- `request_number` (String, 40, Auto-generated) - VR0001000 format
- `request_status` (Choice) - New, In Review, Pending Approval, Approved, Rejected, Completed
- `requested_by` (Reference to sys_user, Required) - Requestor
- `requested_on` (DateTime, Auto-set) - Request timestamp
- `assigned_to` (Reference to sys_user) - Assigned user
- `approval_notes` (String, 1000) - Approval comments
- `priority` (Choice) - Low, Medium, High, Urgent
- `replacing_vendor` (Boolean) - Replacement flag
- `replacing_vendor_name` (String, 255) - Name of replaced vendor
- `replacing_vendor_id` (String, 50) - ID of replaced vendor

## User Interface Requirements

### 7.1 Navigation Requirements
- Modern Compass gradient navigation bar (Blue-to-Navy)
- Four main sections: Vendor Lookup, New Vendor Request, Request Tracking, My Tasks
- Active state indicators using Compass colors
- Responsive design for mobile devices
- Professional branding with Compass color consistency

### 7.2 Wizard Interface Requirements
- **10-step wizard** with centered progress indicators
- **Full-width container** utilizing complete screen space
- **Component reuse** - VendorLookup component used in both main app and wizard Step 2
- **Compass theming** throughout all steps
- **Professional form styling** with validation feedback
- **Mobile-responsive** design with touch-friendly elements

### 7.3 Component Architecture
- **VendorLookup component** reused between main page and wizard
- **Consistent styling** across all components
- **Modular design** for maintainability
- **Shared utility functions** for field handling

## Technical Architecture Requirements

### 8.1 Technology Stack
- **Frontend**: React 18.2.0 with React DOM
- **Backend**: ServiceNow Fluent API 4.1.1
- **Data Integration**: ServiceNow Table API
- **Styling**: Modern CSS with Grid, Flexbox, and Compass color variables
- **Module System**: ES6 modules with proper imports

### 8.2 CSS Architecture
- **CSS Custom Properties** for Compass color variables
- **!important declarations** for critical branding elements to override caching
- **Responsive design** with mobile-first approach
- **Component-based styling** with clear separation of concerns
- **Professional gradients** using official Compass colors

### 8.3 Code Organization
```
src/
├── client/
│   ├── index.html              # Main entry point
│   ├── main.jsx                # React bootstrap
│   ├── app.jsx                 # Main application component
│   ├── app.css                 # Application styles with Compass colors
│   ├── components/             # React components
│   │   ├── VendorLookup.jsx    # Reusable lookup component
│   │   ├── VendorRequestForm.jsx # 10-step wizard
│   │   ├── RequestTracking.jsx
│   │   └── TaskDashboard.jsx
│   ├── services/               # API services
│   │   └── VendorService.js
│   └── utils/                  # Utility functions
│       └── fields.js
├── fluent/                     # ServiceNow metadata
│   ├── index.now.ts
│   ├── tables/
│   ├── ui-pages/
│   ├── business-rules/
│   └── records/
└── server/                     # Server-side scripts
    └── vendor-request-rules.js
```

## Business Rules Requirements

### 9.1 Vendor Request Rules
- Auto-number generation for request tracking (VR0001000 format)
- Default value assignment (priority: Medium, status: New)
- User notification system for request creation
- Status change validation with proper workflow enforcement
- Assignment notification system

## Security Requirements

### 10.1 Data Protection
- Secure handling of tax information (SSN/EIN with masking)
- Masked display of sensitive data in review screens
- Proper access control for vendor information
- Audit logging for all changes

## Performance Requirements

### 11.1 Response Time
- Page load times under 3 seconds
- API response times under 2 seconds
- Real-time search with Enter key support
- Optimized table queries with appropriate limits

### 11.2 Branding Performance
- Consistent Compass color application across all elements
- No visual flicker during color theme application
- Proper CSS cascading for brand consistency

## Testing Requirements

### 12.1 Visual Testing
- Compass color consistency across all components
- Responsive design testing with brand elements
- Cross-browser color rendering verification
- Accessibility testing with proper contrast ratios

### 12.2 Functional Testing
- Complete 10-step wizard workflow testing
- VendorLookup component reuse validation
- Form validation testing with Compass-themed feedback
- Search functionality testing in both main app and wizard

## Sample Data Requirements

### 13.1 Test Vendors
- Minimum 5 sample vendor records with different characteristics
- Various vendor types (consulting, supplies, repair, services)
- Different certification combinations
- Various status states for comprehensive testing

## Future Enhancement Considerations

### 14.1 Branding Enhancements
- Additional Compass brand elements (logos, icons)
- Advanced theming capabilities
- Dark mode support with Compass color variants
- Enhanced accessibility features

### 14.2 Potential Features
- Document attachment support with Compass-themed file uploads
- Advanced reporting with branded visualizations
- Vendor portal with consistent branding
- Mobile app with Compass design system

## Compliance Requirements

### 15.1 Brand Compliance
- Strict adherence to Compass color palette specifications
- Consistent application of brand colors across all elements
- Professional appearance meeting corporate standards
- Accessibility compliance with proper color contrast

### 15.2 Business Compliance
- CEO approval workflow integration
- Vendor exception form requirements
- Technical vendor qualification process
- Model market vendor compliance

---

**Document Version**: 2.0  
**Last Updated**: December 19, 2024  
**Application Version**: 1.1.0  
**ServiceNow Scope**: x_snc_vendor_mto0s  
**Brand Compliance**: Compass Color Palette v1.0