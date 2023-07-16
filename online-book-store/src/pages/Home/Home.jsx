import React from 'react'
import Header from '../../components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';// outlet works as a placeholder in react

function Home() {
    return (
        <>
            <main>
                <Header />
                <Outlet />
            </main>
        </>
    )
}

export default Home
