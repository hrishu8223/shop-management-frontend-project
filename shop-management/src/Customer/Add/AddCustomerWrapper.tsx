import React from "react";

import CustomerFormLayout from "../Layout/CustomerFormLayout";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { useCustomerAddMutation } from "../../Service/customerslice";
import { useNavigate } from "react-router-dom";

// import { toast } from "react-toastify";

export type customerFormValues = {
  name: String;
  email: String;
  mobile: String;  
  city: String;
};

const AddCustomerWrapper: React.FC = () => {
  const [customerAdd] = useCustomerAddMutation();
  const initialValues: customerFormValues = {
    name: "",
    email: "",
    mobile: "",
    city: "",
  };
  const navigate = useNavigate()

  const handleSubmit = (values: customerFormValues) => {
    console.log(values);
    customerAdd(values).then((res:any) => {
      if (res.data.msg) {
        toast.success(res.data.msg);
        navigate(`/listingCustomer`)
      }
      console.log(res);
    });
  };

  const validationSchema = object({
    name: string().required("Name is required"),
    email: string().email("Invalid email format").required("Email is required"),
    mobile: string().required("Mobile is required")
      .min(10, "Mobile number must be atleat 10 digits")
      .max(10)
      .required(),

    city: string().required("City is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...formikProps }) => (
        <Form onSubmit={handleSubmit}>
          <CustomerFormLayout buttonName={"Add"} formikProps={formikProps} />
        </Form>
      )}
    </Formik>
  );
};

export default AddCustomerWrapper;
