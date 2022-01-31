import React from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = () => {
    const router = useRouter()

    let currentPath = router.route.split("/")[1]

    return (
        <div className='navbar mb-2 flex flex-col h-screen items-start px-12 py-8 space-y-8 shadow data-theme="cupcake"'>
            <div className='text-4xl font-bold'>
                <Link href='/dashboard'>CoinGo</Link>
            </div>
            <div className='flex flex-col text-xl items-start space-y-2'>
                <p className='text-base text-stone-400'>
                    NAV
                </p>

                <div className={`link link-hover ${currentPath === 'dashboard' ? 'text-info' : 'text-stone-500'}`}>
                   <Link href="/dashboard">Invoices</Link>
                </div>
                <div className={`link link-hover ${currentPath === 'clients' ? 'text-info' : 'text-stone-500'}`}>
                    <Link href="/clients">Clients</Link>
                </div>
                <div className={`link link-hover ${currentPath === 'projects' ? 'text-info' : 'text-stone-500'}`}>
                    <Link href="/projects">Projects</Link> 
                </div>
            </div>

            <div className="flex flex-col items-start space-y-2">
                <div className='text-base text-stone-400'>
                    PINNED
                </div>
                <div className='text-base text-stone-500'>
                    You can pin clients and projects here.
                </div>
            </div>

            <div className='flex flex-col h-full items-start justify-end space-y-2'>
                <div className='flex flex-row space-x-4'>
                    <div className='link link-hover'>
                        <Link href="/settings">Settings</Link> 
                    </div>
                    <div className='link link-hover'>
                        <Link href="/support">Support</Link>
                    </div>
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
