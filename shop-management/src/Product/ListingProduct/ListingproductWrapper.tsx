import React from 'react'
import { useDeleteProductMutation, useListingProductQuery } from '../../Service/productslice'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import ListingProduct from './ListingProduct';


const ListingproductWrapper = () => {
  const {data, isLoading, isError} = useListingProductQuery
  const [deleteProduct] = useDeleteProductMutation();
  const navigate = useNavigate();
  const HandleDelete = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this category",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete it!",
      cancelButtonText: "Cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id)
          .then(() => {
            Swal.fire("Deleted!", "Product has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", "Failed to delete product.", "error");
          });
      }
    });
  };

  const HandleEdit = (_id: any) => {
    navigate(`/${_id}`);
  };
 

  
  return (
    <ListingProduct
    data={data}
    isLoading={isLoading}
    HandleEdit={HandleEdit}
    isError={isError}
    HandleDelete={HandleDelete}
    />
  )
}

export default ListingproductWrapper