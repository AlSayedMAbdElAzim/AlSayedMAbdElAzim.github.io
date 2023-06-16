import { Menu } from './menu.model';

export const menuItems = [
    new Menu (10, 'ADMIN_NAV.DASHBOARD', 'dashboard', null, 'dashboard', null, false, 0,0),
    new Menu (150, 'ADMIN_NAV.MAINDATA', null, null, 'keyboard', null, true, 0,0),
    new Menu (151, 'ADMIN_NAV.COMPANY', '/atlas/company', null, 'copyright', null, false, 150,0),
    new Menu (160, 'ADMIN_NAV.SYSTEMCODES', null, null, 'landmark', null, true, 0,0),
    new Menu (161, 'ADMIN_NAV.COUNTRY', '/atlas/codetree/country', null, 'language', null, false, 160,0),
    new Menu (162, 'ADMIN_NAV.GOVERN', '/atlas/codetree/govern', null, 'flag', null, false, 160,0),
    new Menu (163, 'ADMIN_NAV.CITY', '/atlas/codetree/city', null, 'location_city', null, false, 160,0),
    new Menu (164, 'ADMIN_NAV.REGION', '/atlas/codetree/region', null, 'add_location', null, false, 160,0),
    new Menu (165, 'ADMIN_NAV.BUILDFEATURE', '/atlas/codetree/features', null, 'check_circle_outline', null, false, 160,0),
    new Menu (166, 'ADMIN_NAV.OWNERSHIP_DOC', '/atlas/codetree/ownershipdoc', null, 'assignments', null, false, 160,0),
    new Menu (170, 'ADMIN_NAV.MENU_BUILDING', null, null, 'business', null, true, 0,0),
    new Menu (171, 'ADMIN_NAV.OWNERS', '/contracts/owner-list', null, 'contacts', null, false, 170,0),
    new Menu (172, 'ADMIN_NAV.BUILDING', '/units/building', null, 'location_city', null, false, 170,0),
    new Menu (173, 'ADMIN_NAV.UNITS', '/units/unit', null, 'home', null, false, 170,0),
    new Menu (174, 'ADMIN_NAV.TENANT', '/contracts/tenant-list', null, 'group', null, false, 170,0),
    new Menu (175, 'ADMIN_NAV.ADD_TENANT', '/contracts/tenant-add', null, 'group_add', null, false, 170,0),
    new Menu (180, 'ADMIN_NAV.RentContracts', null, null, 'note', null, true, 0,0),
    new Menu (181, 'ADMIN_NAV.Contracts', '/contracts/contract-list', null, 'note', null, false, 180,0),
    new Menu (182, 'ADMIN_NAV.AddContracts', '/contracts/contract-add', null, 'note_add', null, false, 180,0),
    new Menu (20, 'ADMIN_NAV.PRODUCTS', null, null, 'grid_on', null, true, 0,9),
    new Menu (21, 'ADMIN_NAV.CATEGORIES', '/products/categories', null, 'category', null, false, 20,0),
    new Menu (22, 'ADMIN_NAV.PRODUCT_LIST', '/products/product-list', null, 'list', null, false, 20,0),
    new Menu (23, 'ADMIN_NAV.PRODUCT_DETAIL', '/products/product-detail', null, 'remove_red_eye', null, false, 20,0),
    new Menu (24, 'ADMIN_NAV.ADD_PRODUCT', '/products/add-product', null, 'add_circle_outline', null, false, 20,0),
    new Menu (30, 'ADMIN_NAV.SALES', null, null, 'monetization_on', null, true, 0,9),
    new Menu (31, 'ADMIN_NAV.ORDERS', '/sales/orders', null, 'list_alt', null, false, 30,0),
    new Menu (32, 'ADMIN_NAV.TRANSACTIONS', '/sales/transactions', null, 'local_atm', null, false, 30,0),
    new Menu (40, 'ADMIN_NAV.USERS', '/users', null, 'group_add', null, false, 0,9),
    new Menu (50, 'ADMIN_NAV.CUSTOMERS', '/customers', null, 'supervisor_account', null, false, 0,9),
    new Menu (60, 'ADMIN_NAV.COUPONS', '/coupons', null, 'card_giftcard', null, false, 0,9),
    new Menu (70, 'ADMIN_NAV.WITHDRAWAL', '/withdrawal', null, 'credit_card', null, false, 0,9),
    new Menu (80, 'ADMIN_NAV.ANALYTICS', '/analytics', null, 'multiline_chart', null, false, 0,9),
    new Menu (90, 'ADMIN_NAV.REFUND', '/refund', null, 'restore', null, false, 0,9),
    new Menu (100, 'ADMIN_NAV.FOLLOWERS', '/followers', null, 'follow_the_signs', null, false, 0,9),
    new Menu (110, 'ADMIN_NAV.SUPPORT', '/support', null, 'support', null, false, 0,9),
    new Menu (120, 'ADMIN_NAV.REVIEWS', '/reviews', null, 'insert_comment', null, false, 0,9),
    new Menu (140, 'Level 1', null, null, 'more_horiz', null, true, 0,9),
    new Menu (141, 'Level 2', null, null, 'folder_open', null, true, 140,0),
    new Menu (142, 'Level 3', null, null, 'folder_open', null, true, 141,0),
    new Menu (143, 'Level 4', null, null, 'folder_open', null, true, 142,0),
    new Menu (144, 'Level 5', null, '/', 'link', null, false, 143,0),
    new Menu (200, 'ADMIN_NAV.EXTERNAL_LINK', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 0,9)
]

// ----------------------------------------------------------
// ==========================================================


// import { Menu } from './menu.model';

// export const menuItems = [
//     new Menu (10, 'ADMIN_NAV.DASHBOARD', '/admin', null, 'dashboard', null, false, 0),
//     new Menu (20, 'ADMIN_NAV.PRODUCTS', null, null, 'grid_on', null, true, 0),
//     new Menu (21, 'ADMIN_NAV.CATEGORIES', '/admin/products/categories', null, 'category', null, false, 20),
//     new Menu (22, 'ADMIN_NAV.PRODUCT_LIST', '/admin/products/product-list', null, 'list', null, false, 20),
//     new Menu (23, 'ADMIN_NAV.PRODUCT_DETAIL', '/admin/products/product-detail', null, 'remove_red_eye', null, false, 20),
//     new Menu (24, 'ADMIN_NAV.ADD_PRODUCT', '/admin/products/add-product', null, 'add_circle_outline', null, false, 20),
//     new Menu (30, 'ADMIN_NAV.SALES', null, null, 'monetization_on', null, true, 0),
//     new Menu (31, 'ADMIN_NAV.ORDERS', '/admin/sales/orders', null, 'list_alt', null, false, 30),
//     new Menu (32, 'ADMIN_NAV.TRANSACTIONS', '/admin/sales/transactions', null, 'local_atm', null, false, 30),
//     new Menu (40, 'ADMIN_NAV.USERS', '/admin/users', null, 'group_add', null, false, 0),
//     new Menu (50, 'ADMIN_NAV.CUSTOMERS', '/admin/customers', null, 'supervisor_account', null, false, 0),
//     new Menu (60, 'ADMIN_NAV.COUPONS', '/admin/coupons', null, 'card_giftcard', null, false, 0),
//     new Menu (70, 'ADMIN_NAV.WITHDRAWAL', '/admin/withdrawal', null, 'credit_card', null, false, 0),
//     new Menu (80, 'ADMIN_NAV.ANALYTICS', '/admin/analytics', null, 'multiline_chart', null, false, 0),
//     new Menu (90, 'ADMIN_NAV.REFUND', '/admin/refund', null, 'restore', null, false, 0),
//     new Menu (100, 'ADMIN_NAV.FOLLOWERS', '/admin/followers', null, 'follow_the_signs', null, false, 0),
//     new Menu (110, 'ADMIN_NAV.SUPPORT', '/admin/support', null, 'support', null, false, 0),
//     new Menu (120, 'ADMIN_NAV.REVIEWS', '/admin/reviews', null, 'insert_comment', null, false, 0),
//     new Menu (140, 'Level 1', null, null, 'more_horiz', null, true, 0),
//     new Menu (141, 'Level 2', null, null, 'folder_open', null, true, 140),
//     new Menu (142, 'Level 3', null, null, 'folder_open', null, true, 141),
//     new Menu (143, 'Level 4', null, null, 'folder_open', null, true, 142),
//     new Menu (144, 'Level 5', null, '/', 'link', null, false, 143),
//     new Menu (200, 'ADMIN_NAV.EXTERNAL_LINK', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 0)
// ]
