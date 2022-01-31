import React from 'react';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/outline';
import { ClientCard } from './ClientCard';

export const ClientsView = () => {
    return (
    <div className='flex flex-col px-12 py-8 space-y-8'>

    <div className='flex justify-between'>
        <div className="dropdown">
            <div tabIndex={0} className="flex btn btn-ghost text-2xl w-full items-center space-x-1">
                <p>Filter</p>
                <ChevronDownIcon className="h-5 w-5"/>
            </div>
            
            <ul tabIndex={0} className="p-2 shadow menu dropdown-content w-52">
                <li>
                    <a>This Week</a>
                </li> 
                <li>
                    <a>This Month</a>
                </li> 
                <li>
                    <a>This Year</a>
                </li>
            </ul>
        </div>

        <div className='btn btn-info flex items-center space-x-1'>
          <PlusIcon className='w-5 h-5' />
          <a href="/invoice">
            <p>Add Client</p>
          </a>
        </div>

        </div>
    <div>
      <ClientCard />
    </div>
    </div>
    )
};


