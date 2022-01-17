import React from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export const AuthCoinbase = ({ href: string }) => {
    const router = useRouter()

    const AuthUser = (e: any) => {
        e.preventDefault()
        router.push("http://127.0.0.1:8000/api/login?code=auth")
    }

    return (
        <a href="http://127.0.0.1:8000/api/login?code=auth" onClick={AuthUser} className="btn btn-blue m-5">
            <p className={styles.code}>
                Login with Coinbase
            </p>
        </a> 
    )
}