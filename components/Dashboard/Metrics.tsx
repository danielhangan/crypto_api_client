import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/outline';

export const DashboardMetrics = () => {
  return (
      <div className='grid grid-cols-3 gap-4 pl-4'>

         <div className="card shadow h-64 bg-green-100 text-primary-content rounded-md">
            <div className="card-body h-full items-center justify-center">
                <div className='flex space-x-1 text-green-700'>
                    <p>$</p>
                    <p className='text-4xl'>13,500</p> 
                </div>
            </div>
            <div className='p-4 bg-green-300 text-center text-green-700'>
                Last paid 4 days ago
            </div>
        </div> 

        <div className="card shadow h-64 bg-amber-100 text-primary-content rounded-md">
            <div className="card-body h-full items-center justify-center">
                <div className='flex space-x-1 text-amber-700'>
                    <p>$</p>
                    <p className='text-4xl'>7,000</p> 
                </div>
            </div>
            <div className='p-4 bg-amber-300 text-center text-amber-700'>
                Last paid 4 days ago
            </div>
        </div> 

        <div className="card shadow h-64 bg-slate-200 text-primary-content rounded-md">
            <div className="card-body h-full items-center justify-center">
                <div className='flex space-x-1 text-slate-700'>
                    <p>$</p>
                    <p className='text-4xl'>13,500</p> 
                </div>
            </div>
            <div className='p-4 bg-slate-300 text-center text-slate-700'>
                Last paid 4 days ago
            </div>
        </div> 

      </div>
  )
};
