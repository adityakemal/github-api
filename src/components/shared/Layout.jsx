import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ goBack, children, }) {
    return (
        <div className='layout'>
            <Navbar goBack={goBack} />
            <main >
                {children}
            </main>
            <Footer />
        </div>

    )
}
