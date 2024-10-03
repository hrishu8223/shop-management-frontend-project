import CategoryLayout from "../Layout/CategoryFormLayout";
import { useNameMutation, useUpdateCategoryMutation } from "../../Service/categoryslice";
import { Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { Form, useNavigate, useParams } from "react-router-dom";

export type CategoryformValues = {
  name: string;
};
const categoryValidation = object({
  name: string().required("Category name is required"),
});
const EditCategoryWrapper = () => {
  const {id}=useParams()
const [editcategory]=useUpdateCategoryMutation()
 
  const navigate = useNavigate();
  const initialValues: CategoryformValues = {
    name: "",
  };


 const handleSubmit = (values: CategoryformValues,{setSubmitting, resetForm}: FormikHelpers<CategoryformValues>)=>{
console.log(values, "values")

editcategory({data:values,id}).then((res)=>{
  console.log(res)
  if(res.data?.msg==="category update successfully"){
    toast.success(res.data?.msg )
  }
})



  }




  return (
    <Formik
      initialValues={initialValues}
      validationSchema={categoryValidation}
      onSubmit={handleSubmit}
    >
      {({handleSubmit,...formikProps}) => (
         <Form onSubmit={handleSubmit}>
          <CategoryLayout
          buttonName="EDIT"
          formikProps={formikProps} 
          heading="Edit New Category"
        />
         </Form>
       
      )}
    </Formik>
  );
};

export default EditCategoryWrapper;
