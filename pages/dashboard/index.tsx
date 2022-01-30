import React from 'react';
import { Navbar } from '../../components/Navbar';
import { useSession } from 'next-auth/react';
import { AuthCoinbase } from '../../components/AuthCoinbase';
import { DashboardUI } from '../../components/Dashboard/Main';


export default function Dashboard ({ userdata: object }) {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className='flex h-full'>
        <div className='flex-none w-1/5 shadow-2xl'>
          <Navbar />
        </div>

        <div className='flex-auto w-4/5'>
          <DashboardUI />
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <AuthCoinbase />
    </div>
  )
};
