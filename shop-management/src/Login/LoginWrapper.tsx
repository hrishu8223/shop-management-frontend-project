import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import Login from "./Login";
import { useLoginMutation } from "../Service/Authslice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginWrapper: React.FC = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log(values);
    login(values).then((res) => {
      if (res.data.msg) {
        toast.success(res.data?.msg);
        setSubmitting(false);
        resetForm()
        navigate("/");
      }
      console.log(res);
    });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <Login formikProps={formikProps} />
        </Form>
      )}
    </Formik>
  );
};

export default LoginWrapper;
