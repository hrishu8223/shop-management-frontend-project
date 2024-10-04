import React from 'react'

interface productFormProps {
    formikProps : any
    buttonName: string
  }

const ProductFormLayout: React.FC<productFormProps> = ( {formikProps,buttonName} )  => {
    const { values, handleChange, touched, errors, handleBlur, } = formikProps;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        {/* Product Form */}
        <h2 className="text-2xl font-bold mb-6 text-gray-700"></h2>

        {/* Product Code */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Product Code 
          </label>
          <input
            type="text"
            name="produtCode"
              value={values.produtCode }
              onChange={handleChange}
              onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder=" Enter product code"
          />
          {touched.productCode && errors.productCode && (
              <div className="text-red-500">{errors.productCode}</div>
            ) }
        </div>

        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Product Name</label>
          <input
            type="text"
            name="productName"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter product name"
          />
          {touched.mobile && errors.mobile && (
              <div className="text-red-500">{errors.mobile}</div>
            )}                                         
        </div>

        {/* Cost Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Cost Price</label>
          <input
            type="text"
            name="costPrice"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter cost price"
          />
          {touched.email && errors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
        </div>

        {/* MRP */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">MRP</label>
          <input
            type="text"
            name="MRP"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter MRP"
          />
          {touched.city && errors.city && (
              <div className="text-red-500">{errors.city}</div>
            )}
        </div>

        
        {/* Selling Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Selling Price</label>
          <input
            type="text"
            name="sellingPrice"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter selling price"
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

  
export default ProductFormLayout