import React from "react";
import { Link } from "react-router-dom";

type Props = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  HandleDelete: (id: string) => void;
  HandleEdit: (id: string) => void;
};

const ListingProduct = ({
  data,
  isLoading,
  isError,
  HandleDelete,
  HandleEdit,
}: Props) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading categories. Please try again later.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        {/* Product Listing */}

        <h2>Customer Details</h2>
        <Link to={`/addProduct`}>
          <button className="text-white rounded-lg h-10 bg-green-500 hover:bg-green-200 transition-all p-2">
            Add New Product
          </button>
        </Link>

        <div>
          <table>
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                  Product Code
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                  Product Name
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                  Cost Price
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                  MRP
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                  Selling Price
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((product: any) => (
                <tr>
                  <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">
                    {product.productCode}
                  </td>
                  <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">
                    {product.productName}
                  </td>
                  <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">
                    {product.costPrice}
                  </td>
                  <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">
                    {product.MRP}
                  </td>
                  <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">
                    {product.dellingPrice}
                  </td>

                  <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">
                    <button
                      onClick={() => HandleEdit(product._id)}
                      className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all mr-2"
                    >
                      EDIT
                    </button>
                    <button
                      onClick={() => HandleDelete(product._id)}
                      className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListingProduct;
