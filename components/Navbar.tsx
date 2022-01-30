import React from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export const Navbar = () => {
  return (
      <div className='navbar mb-2 flex flex-col h-screen items-start px-12 py-8 space-y-8 shadow data-theme="cupcake"'>
          <div className=''>
            <p className='text-4xl font-bold'>CoinGo</p>
          </div>
        <div className='flex flex-col text-xl items-start space-y-2'>
            <p className='text-base text-stone-400'>
                NAV
            </p>
            <a href="/invoices" className='link link-hover text-stone-500'>
                Invoices
            </a>
            <a href="/projects" className='link link-hover text-stone-500'>
                Projects
            </a>
            <a href="/clients" className='link link-hover text-stone-500'>
                Clients
            </a>
        </div>

        <div className="flex flex-col items-start space-y-2">
            <div className='text-base text-stone-400'>
                PINNED
            </div>
            <div className='text-base text-stone-500'>
                You can pin clients and projects here.
            </div>
        </div>

        <div className='flex flex-col h-full items-start justify-end'>
            <div className='flex flex-row space-x-4'>
                <a href="/settings" className='link link-hover'>
                    Settings
                </a>
                <a href="/support" className='link link-hover'>
                    Support
                </a>
                <a onClick={() => signOut({callbackUrl: 'http://localhost:3000/'})} className='link link-hover'>
                    Sign Out
                </a>
            </div>

            <div className='text-base text-stone-400'>
                @ 2022 - Hangan Technology SRL. Thank you for being part of the Beta!
            </div>
        </div>
      </div>
  )
}
