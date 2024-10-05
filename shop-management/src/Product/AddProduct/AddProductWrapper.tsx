import { Form, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { Formik } from "formik";
import ProductFormLayout from "../ProductLayout/ProductFormLayout";
import { toast } from "react-toastify";

import { useCreateProductMutation } from "../../Service/productslice";
import { useGetCategoryQuery } from "../../Service/categoryslice";

export type ProductFormValues = {
  img: String;
  produtCode: String;
  productName: String;
  costPrice: String;
  MRP: String;
  sellingPrice: String;
  categoryId:any
};

const AddProductWrapper: React.FC = () => {
  const { data } = useGetCategoryQuery();
  console.log(data);
  const [createProduct] = useCreateProductMutation();
  const initialValues: ProductFormValues = {
    img: "",
    produtCode: "",
    productName: "",
    costPrice: "",
    MRP: "",
    sellingPrice: "",
    categoryId: "",
  };
  const navigate = useNavigate();

  const handleSubmit = (values: ProductFormValues) => {
    alert('LHHHHHJ')
    console.log(values);
    createProduct(values).then((res: any) => {
      if (res.data.msg) {
        toast.success(res.data.msg);
        navigate(`/listingProduct`);
      }
      console.log(res);
    });
  };

  const validationSchema = object({
    produtCode: string().required("product code is required"),
    productName: string().required("product name is required"),
    costPrice: string().required("cost price is required"),
    MRP: string().required("MRP is required"),
    sellingPrice: string().required("selling price is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit,...formikProps }) => (
        <Form >
          <ProductFormLayout
            data={data}
            buttonName={"Add"}
            formikProps={formikProps}
          />
        </Form>
      )}
    </Formik>
  );
};
export default AddProductWrapper;
