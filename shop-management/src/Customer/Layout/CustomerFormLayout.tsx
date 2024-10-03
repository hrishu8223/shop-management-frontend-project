import React from "react";

interface customerFormProps {
  formikProps : any
  buttonName: string
}
const CustomerFormLayout: React.FC<customerFormProps> = ( {formikProps,buttonName} ) => {
  const { values, handleChange, touched, errors, handleBlur, } = formikProps;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        {/* Customer Form */}
        <h2 className="text-2xl font-bold mb-6 text-gray-700"></h2>

        {/* Customer Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Customer Name
          </label>
          <input
            type="text"
            name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder=" Enter customer name"
          />
          {touched.name && errors.email && (
              <div className="text-red-500">{errors.name}</div>
            ) }
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Mobile</label>
          <input
            type="text"
            name="mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter mobile no."
          />
          {touched.mobile && errors.mobile && (
              <div className="text-red-500">{errors.mobile}</div>
            )}                                         
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="text"
            name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter email"
          />
          {touched.email && errors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">City</label>
          <input
            type="text"
            name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter city"
          />
          {touched.city && errors.city && (
              <div className="text-red-500">{errors.city}</div>
            )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerFormLayout;
