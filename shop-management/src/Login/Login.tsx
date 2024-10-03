// import { FormikProps } from "formik"

// interface LoginFormValues{
//   email:string,
//   password: string
// }
// interface LoginProps{
//   formikProps: FormikProps<LoginFormValues>
// }

// const Login: React.FC <LoginProps> = ({formikProps})=>{

//   const {values, handleChange, touched, errors, handleBlur, handleSubmit} =  formikProps
// }

//   return (
//     <div className='flex flex-col items-center  w-full h-screen gap-3'>

//       {/* Login Form */}
//       <div className='border border-gray-600 gap-2 p-4 px-11'>
//         <Form onSubmit = {handleSubmit}>

// {/* Email */}
//      <div className='flex flex-col'>
//       <label>Email</label>
//       <input className='p-2' value={values.email} onChange={(handleChange)} onBlur={handleBlur} placeholder='Email'/>
//       </div>

//       <div>
//       <label className='flex flex-col'>Password</label>
//       <input className ='p-2 'value={values.password} onChange={(handleChange)} onBlur={handleBlur}  placeholder='Password'/>
//       </div>

//      <div className='bg-sky-400 items-center '>
//       <button className='w-full text-gray-200 rounded-sm 'type='submit'>Login</button>
//      </div>
//      </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

interface LoginProps {
  formikProps: any;
}

const Login: React.FC<LoginProps> = ({ formikProps }) => {
  const [showPassword,setShowPassword]=useState(false)
  const { values, handleChange, touched, errors, handleBlur, isSubmitting } = formikProps;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        {/* Login Form */}
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Login Form</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
          />
          {touched.email && errors.email ? (
            <div className="text-red-500">{errors.email}</div>
          ) : null}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Password</label>
          <input
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            type={showPassword ? 'Text':'password'}
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
          />
          {touched.password && errors.password ? (
            <div className="text-red-500">{errors.password}</div>
          ) : null}
           <button
            type="button"
            className="absolute top-[290px] right-[580px] text-2xl z-50  text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaRegEyeSlash />}
          </button>
        </div>
      
       
        {/* Submit Button */}
        <div>
          <button
          disabled = {isSubmitting}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isSubmitting? "submitting...": "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
