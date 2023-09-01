import React from 'react';
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Header from "../pages/Header";
const Watchlist = () => {
    return(
         <div className='watchlist'>
            <Navbar />
            <Header title='Watchlist' />
         </div>
         );
}


export default Watchlist;