
import { Navigate, useNavigate } from "react-router-dom";
import { useCustomerListingQuery } from "../../Service/customerslice";
import CustomerListing from "./CustomerListing";
import Swal from "sweetalert2";


const CustomerListingWrapper = () => {
  const { data, isLoading, isError } = useCustomerListingQuery();
  console.log(data);
  // const [deleteCustomer] = ();
  
  
  // const HandleDelete = (id: any) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You want to delete this category",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Delete it!",
  //     cancelButtonText: "Cancel!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       deleteCustomer(id)
  //         .then(() => {
  //           Swal.fire("Deleted!", "Customer has been deleted.", "success");
  //         })
  //         .catch((error) => {
  //           Swal.fire("Error!", "Failed to delete customer.", "error");
  //         });
  //     }
  //   });
  // };
  const navigate = useNavigate()

  const HandleEdit = (_id: any) => {
    navigate(`/editCategory/${_id}`);
  
  };

  return (
    <CustomerListing
      data={data}
      isError={isError}
      isLoading={isLoading}
      HandleEdit={HandleEdit}
      // HandleDelete={HandleDelete}
    />
  );
};

export default CustomerListingWrapper;
