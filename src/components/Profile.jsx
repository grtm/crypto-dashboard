import React from 'react';
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Header from "../pages/Header";
const Profile = () => {
    return(
         <div className='Profile'>
            <Navbar />
            <Header title='Profile' />
         </div>
         );
}


export default Profile;