import React from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'
import bell from "../assets/bell.png"
import avatar from "../assets/ninja.jpg"
export default function Userprofile() {
    <div className="user-profile">  
    <div>
    <img src={bell} className="bell-icon"></img>
    <img src={avatar} className="avatar"></img>
    </div>
    <div>
    <span>Favour</span>
    <select>
        <options>Favour</options>
        <options>Wisdom</options>
        <options>Benji</options>
        <options>Mary</options>
    </select>
    </div>
    <button onClick={()=> signOut(auth)}>Logout</button>
    </div>
}