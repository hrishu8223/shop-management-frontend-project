import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginWrapper from "./Login/LoginWrapper";

import AddCategoryWrapper from "./Category/Add/AddCategoryWrapper";
import ListingCategoryWrapper from "./Category/Listing/ListingCategoryWrapper";
import EditCategoryWrapper from "./Category/Edit/EditCategoryWrapper";
import AddCustomerWrapper from "./Customer/Add/AddCustomerWrapper";

import CustomerListingWrapper from "./Customer/List/CustomerListingWrapper";

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
  }
]);

export default router;
