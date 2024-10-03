import { Formik } from "formik";
import CustomerFormLayout from "../Layout/CustomerFormLayout";
import { customerFormValues } from "../Add/AddCustomerWrapper";

const CustomerEditWrapper = () => {
  const initialValues: customerFormValues = {
    name: "",
    email: "",
    mobile: "",
    city: "",
  };
  const handleSubmit = (values: customerFormValues) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formikProps) => {
        return (
          <CustomerFormLayout
           
            buttonName={"Update"}
            formikProps={formikProps}
          />
        );
      }}
    </Formik>
  );
};

export default CustomerEditWrapper;
