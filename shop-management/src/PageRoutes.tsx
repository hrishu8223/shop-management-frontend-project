import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginWrapper from "./Login/LoginWrapper";

import AddCategoryWrapper from "./Category/Add/AddCategoryWrapper";
import ListingCategoryWrapper from "./Category/Listing/ListingCategoryWrapper";
import EditCategoryWrapper from "./Category/Edit/EditCategoryWrapper";
import AddCustomerWrapper from "./Customer/Add/AddCustomerWrapper";

import CustomerListingWrapper from "./Customer/List/CustomerListingWrapper";
import AddProductWrapper from "./Product/AddProduct/AddProductWrapper";
import ListingproductWrapper from "./Product/ListingProduct/ListingproductWrapper";
import EditProductWrapper from "./Product/EditProudct/EditProductWrapper";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginWrapper />,
  },
  {
    path: "/addCustomer",
    element: <AddCustomerWrapper/>,
  },
  {
    path: "/listingCustomer",
    element: <CustomerListingWrapper/>
  },
  // // {
  //   path: "/editCustomer",
  //   element: <CustomerEditWrapper/>,
  // },
  {
    path: "/addCategory",
    element: <AddCategoryWrapper />,
  },
  {
    path: "/listingCategory",
    element: <ListingCategoryWrapper />,
  },
  {
    path:"/editCategory",
    element:<EditCategoryWrapper/>
  },
  {
    path:`/editCategory/:id`,
    element:<EditCategoryWrapper/>
  },

  // Product Routes
  {
    path: "/addProduct",
    element: <AddProductWrapper />,
  },
  {
    path: "/listingProduct",
    element: <ListingproductWrapper />,
  },
  {
    path: "/editProduct",
    element: <EditProductWrapper />,
  },

]);

export default router;
