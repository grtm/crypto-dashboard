import React from 'react';
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Header from '../pages/Header';
const Wallet = () => {
    return (
    <div className='wallet'>
        <Navbar />
        <Header title='Wallet' />
    </div>
    );
}

export default Wallet;