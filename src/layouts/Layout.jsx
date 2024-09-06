import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/headers/Header'
import Footer from '../components/footers/Footer'
import ScrollToTopButton from '../components/scroll-to-top/ScrollToTopBottom'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollToTopButton />
        </>
    )
}

export default Layout