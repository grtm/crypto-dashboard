import React, { useContext } from "react";
import avatar from "../Assets/ninja.png";
import "../style.scss";
import { AuthContext } from "../context/AuthContext";
export default function Header() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="dashboardM">
      <div className="dashboard-container">
      <div className="container">
        <div className="title-container">
          <span className="title">Dashboard</span>
          <span className="text">Updated on 23 may 2023</span>
        </div>
        <div className="search">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="42" height="42" rx="21" fill="#212325" />
            <path
              d="M20.5416 29.25C25.3511 29.25 29.2499 25.3512 29.2499 20.5417C29.2499 15.7322 25.3511 11.8333 20.5416 11.8333C15.7321 11.8333 11.8333 15.7322 11.8333 20.5417C11.8333 25.3512 15.7321 29.25 20.5416 29.25Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30.1666 30.1667L28.3333 28.3333"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="text" placeholder="search your coins..." />
        </div>
        </div>
         <div className="user-profile">
        <div className="user">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bell-icon"
          >
            <rect width="50" height="50" rx="25" fill="#151718" />
            <path
              d="M25 19.9035V22.956"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M25.0178 15.8327C21.6444 15.8327 18.9128 18.5644 18.9128 21.9377V23.8627C18.9128 24.486 18.6561 25.421 18.3353 25.9527L17.1711 27.896C16.4561 29.0969 16.9511 30.4352 18.2711 30.8752C22.6528 32.3327 27.3919 32.3327 31.7736 30.8752C33.0111 30.4627 33.5428 29.0144 32.8736 27.896L31.7094 25.9527C31.3886 25.421 31.1319 24.4769 31.1319 23.8627V21.9377C31.1228 18.5827 28.3728 15.8327 25.0178 15.8327Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M28.0562 31.251C28.0562 32.9285 26.6812 34.3035 25.0037 34.3035C24.1695 34.3035 23.3995 33.9552 22.8495 33.4052C22.2995 32.8552 21.9512 32.0852 21.9512 31.251"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <circle
              cx="30"
              cy="17"
              r="4"
              transform="rotate(180 30 17)"
              fill="#EA2D2D"
            />
          </svg>

          <img src={avatar} className="avatar"></img>
          <div className="user-name">
            <span>{currentUser.displayName}</span>
          </div>
        </div>
       </div>
       </div>
      </div>
  );
}
