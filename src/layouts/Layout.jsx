import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/headers/Header'
import Footer from '../components/footers/Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout