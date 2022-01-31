import React from 'react';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { useSession } from 'next-auth/react';
import { AuthCoinbase } from '../components/AuthCoinbase';


export const DashboardLayout = ( { children } : { children: React.ReactNode }) => {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Coingo is a Crypto Invoice Generator and Invoice Tracking Web Platform"
                    />
                    <meta name="og:title" content="title of the page" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <title>Title of the page</title>
                </Head>

                <div className='flex h-full'>
                    <div className='flex-none w-1/5 shadow-2xl'>
                        <Navbar />
                    </div>

                    <div className="flex-auto w-4/5">
                        {children}
                    </div>
                </div>
                </>
        )
    }

    return (
        <div className="flex flex-col h-screen w-full items-center justify-center">
            <AuthCoinbase />
        </div>
    )
};
