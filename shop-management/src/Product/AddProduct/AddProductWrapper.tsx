import { Form, useNavigate } from "react-router-dom";
import { useProductAddMutation } from "../../Service/productslice";
import { object, string } from "yup";
import { Formik } from "formik";
import ProductFormLayout from "../ProductLayout/ProductFormLayout";

export type ProductFormValues = {
    produtCode: String;
    productName : String;
    costPrice: String;  
    MRP: String;
    sellingPrice: String;


  };
  
  const AddProductWrapper: React.FC = () => {
    const [productAdd] = useProductAddMutation();
    const initialValues: ProductFormValues = {
      produtCode: "",
      productName: "",
      costPrice: "",
      MRP: "",
      sellingPrice: "",
      
    };
    // const navigate = useNavigate()
  
    const handleSubmit = (values: ProductFormValues) => {
      console.log(values);
      productAdd(values).then((res:any) => {
        if (res.data.msg) {
          productAdd.success(res.data.msg);
        //   navigate(`/listingCustomer`)
        }
        console.log(res);
      });
    };
  
    const validationSchema = object({
      name: string().required("Name is required"),
      email: string().email("Invalid email format").required("email is required"),
      mobile: string()
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
            <ProductFormLayout buttonName={"Add"} formikProps={formikProps} />
          </Form>
        )}
      </Formik>
    );
  };
  export default AddProductWrapper