// import { toast } from "react-toastify";
// import { object, string } from "yup";
// import { Formik, FormikHelpers } from "formik";
// import { useAddCategoryMutation } from "../../Service/categoryslice";
// import CategoryLayout from "../Layout/CategoryFormLayout";

// export type CategoryformValues = {
//   categoryName: string;
// };

// const AddCategoryWrapper = () => {
//   const [AddCategory] = useAddCategoryMutation();

//   const initialValues: CategoryformValues = {
//     categoryName: "",
//   };

//   const handleSubmit = (
//     values: CategoryformValues,
//     { setSubmitting, resetForm }: FormikHelpers<CategoryformValues>
//   ) => {
//     console.log(values);

//       AddCategory(values).then((res)=>{
//           console.log(res);

//         if(res.data?.mag==="category added successfully"){
//           toast.success(res.data?.mag)

//           resetForm()

//       setSubmitting(false)
//         }else {
//           toast.error(res.data?.msg)
//         console.log("hii")
//           setSubmitting(false)
//           resetForm()
//         }
//       })}
//   };

//   const validationSchema = object({
//     categoryName: string().required("Category name is required"),
//   });

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {(formikProps) => (
//         <CategoryLayout
//           buttonName="Add"
//           formikProps={formikProps} // Pass the whole Formik bag here
//           heading="Add New Category"
//         />
//       )}
//     </Formik>
//   );
// ;

// export default AddCategoryWrapper;import { object, string } from "yup";


import CategoryLayout from "../Layout/CategoryFormLayout";

import { useNameMutation } from "../../Service/categoryslice";
import { Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { Form, useNavigate } from "react-router-dom";

export type CategoryformValues = {
  name: string;
};
const categoryValidation = object({
  name: string().required("Category name is required"),
});
const AddCategoryWrapper = () => {
  const [name] = useNameMutation();
 
  const navigate = useNavigate();
  const initialValues: CategoryformValues = {
    name: "",
  };

 const handleSubmit = (values: CategoryformValues,{setSubmitting, resetForm}: FormikHelpers<CategoryformValues>)=>{
console.log(values, "values")
if(values){

 name(values).then((res)=>{
  console.log(res)
  if(res.data?.msg === "category added successfully"){
    toast.success(res.data?.msg)
    navigate("/listingCategory")
  }else{
 toast.error(res?.data.msg)
  }
 }).finally(()=>{
  setSubmitting(false)
  resetForm()
 })

}
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
          buttonName="Add"
          formikProps={formikProps} // Pass the whole Formik bag here
          heading="Add New Category"
        />
         </Form>
       
      )}
    </Formik>
  );
};

export default AddCategoryWrapper;
