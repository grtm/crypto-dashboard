import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/vector.png";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  const [hamburger, sethamburger] = useState(false);

  const handleShowHamburger = () => {
    sethamburger(!hamburger);
  };
  return (
    <div className="navbar">
      <div className="menu">
        {hamburger ? (<div className="close" onClick={handleShowHamburger}><i class="fi fi-br-cross"></i></div>) : (
            <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleShowHamburger}
          >
            <rect width="44" height="44" rx="22" fill="#151718" />
            <path
              d="M22.0001 19.32C23.1901 19.32 24.1601 18.35 24.1601 17.16C24.1601 15.97 23.1901 15 22.0001 15C20.8101 15 19.8401 15.97 19.8401 17.16C19.8401 18.35 20.8101 19.32 22.0001 19.32Z"
              stroke="#E1E1E1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.7899 29.0001C17.9799 29.0001 18.9499 28.0301 18.9499 26.8401C18.9499 25.6501 17.9799 24.6801 16.7899 24.6801C15.5999 24.6801 14.6299 25.6501 14.6299 26.8401C14.6299 28.0301 15.5899 29.0001 16.7899 29.0001Z"
              stroke="#E1E1E1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.21 29.0001C28.4 29.0001 29.37 28.0301 29.37 26.8401C29.37 25.6501 28.4 24.6801 27.21 24.6801C26.02 24.6801 25.05 25.6501 25.05 26.8401C25.05 28.0301 26.02 29.0001 27.21 29.0001Z"
              stroke="#E1E1E1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>

      {hamburger && (
        <>
          <div className="hamburger">
          <div className="sidenav">
      <div className="logo">
        <img src={Logo} alt="img" />
        <h4>ooPsum</h4>
      </div>
      <div className="flex">
        <div className="links">
          <NavLink className="nav-links" to="/">
            {" "}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0809 7.61623C17.3263 7.61623 18.3359 6.60663 18.3359 5.36123C18.3359 4.11583 17.3263 3.10623 16.0809 3.10623C14.8355 3.10623 13.8259 4.11583 13.8259 5.36123C13.8259 6.60663 14.8355 7.61623 16.0809 7.61623Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.92542 7.61623C7.17082 7.61623 8.18041 6.60663 8.18041 5.36123C8.18041 4.11583 7.17082 3.10623 5.92542 3.10623C4.68001 3.10623 3.67041 4.11583 3.67041 5.36123C3.67041 6.60663 4.68001 7.61623 5.92542 7.61623Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0809 18.8927C17.3263 18.8927 18.3359 17.8831 18.3359 16.6377C18.3359 15.3923 17.3263 14.3827 16.0809 14.3827C14.8355 14.3827 13.8259 15.3923 13.8259 16.6377C13.8259 17.8831 14.8355 18.8927 16.0809 18.8927Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.92542 18.8927C7.17082 18.8927 8.18041 17.8831 8.18041 16.6377C8.18041 15.3923 7.17082 14.3827 5.92542 14.3827C4.68001 14.3827 3.67041 15.3923 3.67041 16.6377C3.67041 17.8831 4.68001 18.8927 5.92542 18.8927Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Dashboard
          </NavLink>
          <NavLink className="nav-links" to="/portfolio">
            {" "}
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.24894 20.6657H13.7489C18.3323 20.6657 20.1656 18.8324 20.1656 14.249V8.74905C20.1656 4.16572 18.3323 2.33238 13.7489 2.33238H8.24894C3.66561 2.33238 1.83228 4.16572 1.83228 8.74905V14.249C1.83228 18.8324 3.66561 20.6657 8.24894 20.6657Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.71582 13.7816L8.89749 10.9491C9.20915 10.5458 9.78665 10.4724 10.19 10.7841L11.8675 12.1041C12.2708 12.4158 12.8483 12.3424 13.16 11.9483L15.2775 9.21661"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Portfolio
          </NavLink>
          <NavLink className="nav-links" to="/trading">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1667 7.79167C20.1667 11.0825 17.4992 13.75 14.2083 13.75C14.0525 13.75 13.8875 13.7408 13.7317 13.7317C13.5025 10.8258 11.1742 8.49749 8.26832 8.26833C8.25916 8.11249 8.25 7.9475 8.25 7.79167C8.25 4.50084 10.9175 1.83334 14.2083 1.83334C17.4992 1.83334 20.1667 4.50084 20.1667 7.79167Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.7499 14.2083C13.7499 17.4992 11.0824 20.1667 7.79159 20.1667C4.50075 20.1667 1.83325 17.4992 1.83325 14.2083C1.83325 10.9175 4.50075 8.25 7.79159 8.25C7.94742 8.25 8.11241 8.25916 8.26824 8.26832C11.1741 8.49749 13.5024 10.8258 13.7316 13.7317C13.7408 13.8875 13.7499 14.0525 13.7499 14.2083Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.12408 1.83334H2.74992C2.24575 1.83334 1.83325 2.24584 1.83325 2.75V5.12417C1.83325 5.94 2.82324 6.35249 3.40074 5.77499L5.77491 3.40083C6.34324 2.82333 5.93992 1.83334 5.12408 1.83334Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.8757 20.1667H19.2499C19.7541 20.1667 20.1666 19.7542 20.1666 19.25V16.8758C20.1666 16.06 19.1766 15.6475 18.5991 16.225L16.2249 18.5992C15.6566 19.1767 16.0599 20.1667 16.8757 20.1667Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Trading
          </NavLink>
          <NavLink className="nav-links" to="/watchlist">
            {" "}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2816 11C14.2816 12.815 12.8149 14.2817 10.9999 14.2817C9.18493 14.2817 7.71826 12.815 7.71826 11C7.71826 9.185 9.18493 7.71833 10.9999 7.71833C12.8149 7.71833 14.2816 9.185 14.2816 11Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.0001 18.5808C14.2359 18.5808 17.2518 16.6742 19.3509 13.3742C20.1759 12.0817 20.1759 9.90917 19.3509 8.61667C17.2518 5.31667 14.2359 3.41 11.0001 3.41C7.76427 3.41 4.74843 5.31667 2.64927 8.61667C1.82427 9.90917 1.82427 12.0817 2.64927 13.3742C4.74843 16.6742 7.76427 18.5808 11.0001 18.5808Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Watchlist
          </NavLink>
          <NavLink className="nav-links" to="/academy">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1668 15.845V4.78083C20.1668 3.68083 19.2685 2.865 18.1777 2.95667H18.1227C16.1977 3.12167 13.2735 4.1025 11.6418 5.12917L11.486 5.23C11.2202 5.395 10.7802 5.395 10.5143 5.23L10.2852 5.0925C8.6535 4.075 5.7385 3.10333 3.8135 2.9475C2.72266 2.85583 1.8335 3.68083 1.8335 4.77167V15.845C1.8335 16.725 2.5485 17.55 3.4285 17.66L3.69433 17.6967C5.6835 17.9625 8.75433 18.9708 10.5143 19.9333L10.551 19.9517C10.7985 20.0892 11.1927 20.0892 11.431 19.9517C13.191 18.98 16.271 17.9625 18.2693 17.6967L18.5718 17.66C19.4518 17.55 20.1668 16.725 20.1668 15.845Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 5.5325V19.2825"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.104 8.2825H5.0415"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.7915 11.0325H5.0415"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Academy
          </NavLink>
          <NavLink className="nav-links" to="/profile">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11.0001 11C13.5314 11 15.5834 8.94797 15.5834 6.41667C15.5834 3.88536 13.5314 1.83334 11.0001 1.83334C8.46878 1.83334 6.41675 3.88536 6.41675 6.41667C6.41675 8.94797 8.46878 11 11.0001 11Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.8741 20.1667C18.8741 16.6192 15.3449 13.75 10.9999 13.75C6.6549 13.75 3.12573 16.6192 3.12573 20.1667"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Profile
          </NavLink>
          <NavLink className="nav-links" to="/wallet">
            {" "}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9167 8.25H6.41675"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.1668 10.0558V11.9442C20.1668 12.4484 19.7634 12.8608 19.2501 12.8792H17.4534C16.4634 12.8792 15.556 12.155 15.4735 11.165C15.4185 10.5875 15.6384 10.0467 16.0234 9.67083C16.3626 9.32249 16.8301 9.12085 17.3434 9.12085H19.2501C19.7634 9.13918 20.1668 9.55164 20.1668 10.0558Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0232 9.67082C15.6382 10.0467 15.4183 10.5875 15.4733 11.165C15.5558 12.155 16.4632 12.8791 17.4532 12.8791H19.2499V14.2083C19.2499 16.9583 17.4166 18.7917 14.6666 18.7917H6.41659C3.66659 18.7917 1.83325 16.9583 1.83325 14.2083V7.79166C1.83325 5.29833 3.33659 3.55666 5.67409 3.26333C5.91242 3.22666 6.15992 3.20833 6.41659 3.20833H14.6666C14.9049 3.20833 15.1341 3.21748 15.3541 3.25415C17.7191 3.52915 19.2499 5.27999 19.2499 7.79166V9.12084H17.3432C16.8299 9.12084 16.3624 9.32248 16.0232 9.67082Z"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Wallet
          </NavLink>
        </div>

        <div className="sidenav-foot">
          <div className="logout">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9866 13.4016L18.3332 11.055L15.9866 8.70831"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.94678 11.055H18.2693"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.7801 18.3334C6.72844 18.3334 3.44678 15.5834 3.44678 11C3.44678 6.41669 6.72844 3.66669 10.7801 3.66669"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Logout
          </div>
          <div className="mode">
          <DarkMode />

          </div>
        </div>
      </div>
    </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
