import React from "react";
import { Link } from "react-router-dom";

type Props = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  HandleDelete: (id: string) => void;
  HandleEdit: (id: string) => void;
};

const ListingCategory = ({
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
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        {/* Category Listing */}
        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Category Details
        </h2>

        <Link to={`/addCategory`}>
          <button
            className="text-white rounded-lg h-10 bg-green-500 hover:bg-green-200 transition-all p-2"
            onClick={() => console.log("Add New Category")} // Replace with actual add category handler
          >
            Add New Category
          </button>
        </Link>

        <div className="overflow-auto max-h-[430px]">
          <table className="w-full bg-white">
            <thead className="bg-gray-100 sticky top-0 z-10 text-center">
              <tr>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                  Category Name
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((category: any) => (
                <tr
                  key={category._id}
                  className="hover:bg-gray-50 transition duration-200 items-center"
                >
                  <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">
                    {category.name}
                  </td>
                  <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">
                    <button
                      onClick={() => HandleEdit(category._id)}
                      className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all mr-2"
                    >
                      EDIT
                    </button>
                    <button
                      onClick={() => HandleDelete(category._id)}
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

export default ListingCategory;
