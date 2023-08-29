import React from 'react'
import search from "../assets/search.png"
import Userprofile from "../components/Userprofile";
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'
import bell from "../assets/bell.png"
import avatar from "../assets/ninja.jpg"
export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
       <span className="title">Dashboard</span>
       <span className="text">Updated on 23 may 2023</span>
       </div>
      <div className="search">
        <img src={search} className="search-icon"></img>
        <input type="text" placeholder="search your coins..."/>
      </div>
      <div className="user-profile">  
    <div className="user">
    <img src={bell} className="bell-icon"></img>
    <img src={avatar} className="avatar"></img>
    <div className="user-name">
    <span>Favour</span>
    <button onClick={()=> signOut(auth)}>Logout</button>
    </div>
    </div>
    </div>
    </div>
  )
}
