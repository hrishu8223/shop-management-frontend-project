import React from "react";
import { ProductFormValues } from "../AddProduct/AddProductWrapper";
import { Formik } from "formik";
import ProductFormLayout from "../ProductLayout/ProductFormLayout";

const EditProductWrapper = () => {

  const initialValues: ProductFormValues = {
    produtCode: "",
    productName: "",
    costPrice: "",
    MRP: "",
    sellingPrice: "",
  };
  const handleSubmit = (values: ProductFormValues) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formikProps) => {
        return (
          <ProductFormLayout buttonName={"Update"} formikProps={formikProps} />
        );
      }}
    </Formik>
  );
};

export default EditProductWrapper;
