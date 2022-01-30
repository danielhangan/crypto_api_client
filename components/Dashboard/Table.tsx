import React from 'react';
import Image from 'next/image';

export const Table = () => {
  return (
    <div className="overflow-x-auto pl-4">
        <table className="table w-full">
            <thead>
            <tr>
                <th>INVOICE</th> 
                <th>STATUS</th> 
                <th>CURRENCY</th> 
                <th>TOTAL</th> 
                <th></th>
            </tr>
            </thead> 
            <tbody>
            <tr>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                        <Image src="/noimage-team.png" layout="fill" alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div> 
                    <div>
                    <div className="font-bold">
                            Invoice Number #001
                        </div> 
                    <div className="text-sm opacity-50">
                            Microsoft Inc.
                        </div>
                    </div>
                </div>
                </td> 
                <td>
                    <span className="bg-green-300 p-2 rounded-md text-green-700">Paid</span>
                </td> 
                <td>ETH</td> 
                <td>0.5</td> 
                <th>
                <button className="btn btn-ghost btn-md">details</button>
                </th>
            </tr>
            </tbody>    
            <tfoot>
                <tr>
                    <th>GRAND TOTAL USD</th> 
                    <th></th> 
                    <th></th> 
                    <th className='text-lg'>$3,000</th> 
                    <th></th>
                </tr>
            </tfoot>
        </table>
    </div>


  )
};
