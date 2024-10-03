// import { ErrorMessage} from 'formik';
import { Form } from 'formik';
import AtomTextField from '../../Components/Atoms/AtomTextField.tsx/AtomTextField';
// import { CategoryformValues } from '../Add/AddCategoryWrapper';

// type Props = {
//     // formikProps: FormikProps<CategoryformValues>; // Ensure type matches formik values
//     heading: string;
//     buttonName: string;
// };

const CategoryLayout = ({ formikProps, heading, buttonName }: any) => {
   const { values, handleChange, handleBlur,handleSubmit,setSubmitting, isSubmitting,errors } = formikProps; // Extract handleBlur

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6 text-slate-700">{heading}</h2>

                   {/* <Form onSubmit={handleSubmit}> */}
                     {/* Category Name */}
                     <div className="mb-4">
                        <AtomTextField
                            label="CategoryName"
                            placeholder="Enter category name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur} // Use handleBlur from Formik
                            className="w-full p-2"
                        />
                        <p className="text-red-400 h-2">
                            
                            {/* <ErrorMessage name="name" /> */}
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="border rounded-lg bg-blue-600 w-full h-12 p-2 mt-4 font-light text-xl text-white"
                            disabled={isSubmitting} // Disable while submitting
                        >
                            {isSubmitting ? "Submitting..." : `${buttonName}`}
                        </button>
                    </div>
                   {/* </Form> */}
            </div>
        </div>
    );
};

export default CategoryLayout;

