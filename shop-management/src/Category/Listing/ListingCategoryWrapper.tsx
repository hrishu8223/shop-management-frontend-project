import React from "react";
import ListingCategory from "./ListingCategory";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../Service/categoryslice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ListingCategoryWrapper = () => {
  const { data, isLoading, isError } = useGetCategoryQuery();
  console.log(data);
  const [deleteCategory] = useDeleteCategoryMutation();
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
        deleteCategory(id)
          .then(() => {
            Swal.fire("Deleted!", "Category has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", "Failed to delete category.", "error");
          });
      }
    });
  };

  const HandleEdit = (_id: any) => {
    navigate(`/editCategory/${_id}`);
  };

  return (
    <ListingCategory
      data={data}
      isError={isError}
      isLoading={isLoading}
      HandleEdit={HandleEdit}
      HandleDelete={HandleDelete}
    />
  );
};

export default ListingCategoryWrapper;
