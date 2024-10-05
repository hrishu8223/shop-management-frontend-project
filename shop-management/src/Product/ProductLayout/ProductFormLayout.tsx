
import React from "react";

interface productFormProps {
  formikProps: any;
  buttonName: string;
  
}

const ProductFormLayout: React.FC<productFormProps> = ({ formikProps, buttonName,data }) => {
  const { values, handleChange, touched, errors, handleBlur  } = formikProps;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        {/* Product Form */}
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Product Form</h2>

        {/* IMG */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">IMG</label>
          <input
            type="text"
            name="img"
            value={values.img}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter image URL"
          />
          {touched.img && errors.img && (
            <div className="text-red-500">{errors.img}</div>
          )}
        </div>

        {/* Category Id (Select Field) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Category Id</label>
          <select
            name="categoryId"
         value={values.categoryId }
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          >
      
            {data?.data.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          {touched.categoryId && errors.categoryId && (
            <div className="text-red-500">{errors.categoryId}</div>
          )}
        </div>

        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Product Name</label>
          <input
            type="text"
            name="productName"
            value={values.productName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter product name"
          />
          {touched.productName && errors.productName && (
            <div className="text-red-500">{errors.productName}</div>
          )}
        </div>

        {/* Cost Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Cost Price</label>
          <input
            type="text"
            name="costPrice"
            value={values.costPrice}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter cost price"
          />
          {touched.costPrice && errors.costPrice && (
            <div className="text-red-500">{errors.costPrice}</div>
          )}
        </div>

        {/* MRP */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">MRP</label>
          <input
            type="text"
            name="MRP"
            value={values.MRP}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter MRP"
          />
          {touched.MRP && errors.MRP && (
            <div className="text-red-500">{errors.MRP}</div>
          )}
        </div>

        {/* Selling Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Selling Price</label>
          <input
            type="text"
            name="sellingPrice"
            value={values.sellingPrice}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter selling price"
          />
          {touched.sellingPrice && errors.sellingPrice && (
            <div className="text-red-500">{errors.sellingPrice}</div>
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

export default ProductFormLayout;
