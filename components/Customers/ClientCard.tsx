import React from 'react';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export const ClientCard = () => {
    return (
        <div className='grid grid-cols-4 gap-12 pl-4'>
            <div className='card shadow h-72 bg-white text-primary-content rounded-md'>
                <div className="card-body h-full p-4 justify-between">
                    <div className="flex flex-col space-y-2 items-start">
                        <Image src="/noimage-team.png" width={50} height={50} alt="company avatar" />
                        <p className='text-black text-xl font-medium'>Microsoft</p>
                    </div>
                    <div className="space-y-2">
                        <div className='text-base text-black space-y-1'>
                            <p>pay@microsoft.com</p>
                            <p>2 invoices</p>
                        </div>

                        <div className="divider py-0"></div>

                        <div className='flex flex-row justify-between items-center'>
                            <div className='text-left text-stone-500 flex flex-row space-x-4'>
                                <p>Edit</p>
                                <p>Compose</p>
                            </div>
                            <div className="indicator-item badge badge-xs badge-secondary"></div> 
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
};

