export class ApiConstant {
  api_Ip=  'https://realestate-mu-eight.vercel.app/' ; // 'http://68.183.55.168/';
  api_constant=   'realestate/api/v1/'; // "api/v1/";

  companyId="M=1";
  Priority="C=0";
  delete="D=0";
  noImage = "https://fuchsia4u.s3-us-west-1.amazonaws.com/media/noimage.png";
  logoImage = "https://fuchsia4u.s3-us-west-1.amazonaws.com/media/company/FUCHSIA.jpeg";
  // ==========API====================

  api_Login="users/authenticate/"//"api-token-auth/"  //"rest-auth/login/" //; //login Api

  api_groupRegister="users/groups/" //group api

  api_registerUser="users/customuser/"

  api_Branch="atlas/branch/"; //branch Api

  api_CompanyData="atlas/company/1/"; //company Data Api

  api_item="product/item/";   // item Api

  api_product="product/item/getProducts/";  //product Api

  api_service="product/items/service/"; //service Api

  api_store="atlas/store/";   //store Api

  api_addCat="product/category/";
  api_mainCat="product/category/maincategory?M=1&C=0";   //main category Api

  api_subCat="product/category/subcategory?M=1&C=0";  //sub category Api

  api_subCatForMainIdCat="product/category/subcategory?M=1&C=0&main=";  // sub category for main category with id

  api_MaxCode_MainCategory="product/category/maxcode?M=1&D=0";  //max code for main cat

  api_MaxCode_SubCategoryForMainIdCat="product/category/maxcode?M=1&D=0&main=";//max code for sub cat with main cat id

  api_TaxAndDiscount="atlas/taxanddiscount/";  // taxanddiscount Api

  api_GetTax="atlas/taxanddiscount/tax/?M=1&C=0";  //get Taxes api

  api_GetDiscount="atlas/taxanddiscount/discount/?M=1&C=0";   //get Discount api

  api_employee="atlas/employee/";
  api_owners = "contracts/owner/" ;
  api_owners_allOwners = "contracts/owner/allOwners" ;

  api_Customer="contracts/customer/";
  api_relativeCustomer="contracts/customer/relativecustomer/";
}