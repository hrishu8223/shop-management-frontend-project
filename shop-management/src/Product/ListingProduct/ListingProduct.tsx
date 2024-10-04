import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    data: any
    isLoading:boolean,
    isError: boolean,
     HandleDelete: (id: string) => void, 
     HandleEdit: (id: string) => void,
    };

const ListingProduct = ({}: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">

        {/* Product Listing */}
        
        <h2>Customer Details</h2>
<Link to = {`/addProduct`}>
        <button className="text-white rounded-lg h-10 bg-green-500 hover:bg-green-200 transition-all p-2" >Add New Product</button>
        </Link>

      <div>
        <table>
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Name</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Email</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Mobile</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">City</th>
            </tr>
          </thead>
          <tbody>
           {data?.data?.map((customer:any)=>(
            <tr>
            <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{customer.name}</td>
            <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{customer.email}</td>
            <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{customer.mobile}</td>
            <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{customer.city}</td>
            <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">

                <button onClick={()=>HandleEdit}>EDIT</button>
                <button onClick={()=>HandleDelete}>DELETE</button>
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
