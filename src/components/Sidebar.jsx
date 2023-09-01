import React from 'react'
import {auth} from "../firebase"
import { signOut } from 'firebase/auth'
import { NavLink } from 'react-router-dom';
import DarkMode from "../DarkMode/DarkMode";  
export default function Sidebar() {
  return (
    <div className="sidenav">
        <div className="logo">
        <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAB6CAMAAAC8/IBMAAAAaVBMVEX///8AAAD8/Pz4+Pj09PTU1NTd3d3Z2dl8fHzq6urx8fG0tLTt7e3BwcHm5ubGxsafn59HR0dBQUEaGhq6urqOjo6CgoKUlJRlZWWmpqYhISFSUlIrKyuIiIhdXV0QEBA5OTlwcHAyMjIfo6QDAAAKE0lEQVR4nO1b2ZKrug5NIEwhjGFMSID+/4882Ma2PIFJp0/dunX0sKt3ALOsYUmWzen0n/xfiuMneduE4dzNYdi0eeW5/z6IKOu7s06ebZL+ayjcIH8OWhhEHsXLu/4LONK62EBBpQy9P8YRPy1gEJnyv1NM2o7WOLCEwZ/giF73YzgWGWf/6zic9jgOLM2XbZQctAuU/Is40rf2FcXc5JmXus4it8CLQwOU4WvuEj+UwceiSdKLcJfflEa1tM43cDjqVItYccRET7lUntHvgXiyQh7tTblJ1trUKLyT/RZILA34rlRFV5OAtOuj5R5PVlL7OyC5OFqZqTg8OP1HlzA7eJKfz78B8hKGGmP1jksDbhhi0XDZj/D883MgszDQS3NHD643mmCNBR4qP2U5AUihSa4p94Wh1r/lKpio+AyKYJrmot5QsYgZW3OUCq5WfAKkhiNoPOTEeSZU4xqIBy30Pg6kBY8PmoyastDtdstFWFsdjqAMqlQz5YzWjz/J9kBR9hJrzYMJMQIaLTQVOyO8bcM42azmrENs6wB9PjVAesOogXCvm6swkBwJIEBXbw0QGlWdOGYqlNHXVgvjfIjhEv7UjyZ6KU4xkzh5uQCh7ObEwDnG+yIfuQp4SsMTVCOiq6bF6CHyqPD/fEZo7zbJAn+RAKRE2+oWUJqGWFel38XRejz88u8PuOfdwwTg8CxkSXABB9KrV1dnFSPb7TBobNVFIdjfn8p6J90cWBWHZwoNC1XrbIW3RCVmYeJeLs56z2wr9hHefQHuqoabTy48hTLFv2Pv9cg1xL2FgTO4q9jUTdyalXLtQgiiE4AgBB0DuchjeTCKG42PXXks7Be2XIOdaU6doHiE4O4CJ6idU/I8D9olOh+92UXCVDKqoUYSfClQzBWpKTullD7GDNeTEiEuKyLyByPvx17e5JlPLdGI/kfBe7B/z6crzsxDkE8XvCoJ2Q2u19evueu6+VXHAQjMPXpjPjWq5IqnPYpzQVXM4LrDit0hfluTi7c4lFexBfOUcXs1xt1OdW5iGzEq8BQrnDDvmHOxI2CN3Krn9qJeV32JUySi0EGq0ymyzfMyL/9OKf8B4Xj96N4OZTMRumxpq3oJep1c/GFTZMgxZqLraDHT43a6Ndp3S7JVHXB/VVYM+NJDch5klQkB6cFdngNK4CKs8z6u4j5/zXKDbovdWJGspiisLYk6MfUjZ2AcuBinTla7TF3vX6GR3ZtXwwXje8NnmYsp3oRzgMRGl9WWIwOCVEKi7xF6+rrSz7kDmXnWo7eotIPCdJBsQ1cyTFM3GrOdZh3PhdWU5uhhiySF6DONbSi/M1pfFzb312aVDRYw5hUHozWlfEBX5EXTW5oYqVx07RVJmOpLTWlKxGhAX5g7kTWZUd9ZW0+1RfPIoeYZTQ24iAKZZFprVIutAV+uDkG6Ss2uPrCwADKt2ip6QyhdwPlNxE/bolhRPinkO9tCmS2XdI0QJMyT5DSJsssEp+uwsd5h2D2xPkx1mkaYo5gIn/GaPCbOc2DC2apekGjL+ECj06e8dddfd5n55ITg5AWvXYO1b/5okpMb111Rvpv+2O7ShfL+qN8ku7I+hA5mlJDYcYJ4kSq4Mh180PVldKEPHhY6VkuAXwnzA/1+FKuJDX70xe1GtsrU8z0rMVUSDha+uozqqkMUJ82qGEu2E88srejXgiy2lAXAFf2y2Nbsl66fNNODx9I4PGPh7iyGubmyRKJUMK8KlwWtIU24ntqmR8EVQixZMcwede7EEolMbCmq5wtTiZW+zFu2NbxxMUmRSEj0Sw0jkvcbOZGcAohU4qbOoyxKWNGPMDiCxXqlfwRJLf4eoPSQFDrTpABHMffB7eK67uXmvbi1IF/70/pyW+tIHhuiMjXRchDLVFMrnilwAm3qCJC+ul2PNURxtBEzKwV1uuTnr0QqrK/xOyZ3J4oNzLY8ZSqtSEYOTUDXWmpw5d9KxvZ6ZjOw/dOUp0iV9tzY+Mw01ha3wvRsr8+A/uP8o81xpHu83TBb/QHaJxW6xfpp6KuCxc0LHZIULVuGvWqAOMRb/Wn1IUMu07p7LnfViOAt03m3IHCeihEugAgfhse01ePMq2YgGQrHWvlZg5gEF/wJKMVUPWor6kJyfj6+3bYr5j4hki8ciWkuN3oDXGUgK8hIvK1RJIkVLZ94w9e4N8TuAI6IkEirKewjlkBOEU5DP/Anpnvjygv5BBEQm9NZrvVvyOXsN9EKJVxZl8a8GtWt0Dtl/sjypX0p+ZLnxl9jng7LPHduHtQfElouWHEHjk4kSvSw0m6j56fp5CCjws5nvzOEImuK5z/w/ubGfFijjne3AlG3qNrR9dHN4stBwLpwW90tTcfPLQRg5VlpDpsF19Dr0pMtDC4s8Wx1qXkXlOdP7HE08HPZ+zYFx1xE+mrM6/kmgjFykGg6w1i75TpJ8LeFYMjXUogTvgG8vbHP90YYl5M9MKJcQT/7gjPkuhyn2858I2tnIcd3EFhpgJ+9uxSnvUpOJUAyrOMx+xs6Fky4z3JPKagucWjZN2zcM0KyWmcNWe4lu5vGrHDjScFbzXVFNH9gA9zDSG7riDjgHMZYwy45ctDcowjNVNkxL1kCDSGhu2G4WuI7/KYWGxB+JIy5lEsCEdVf02boiTLjzSR/5KNxej1bdCnByRPmtPZ7ZkTwrt/tPDng2Vg4wmE1Dl8H8FwZK+A2JUGaq4hP0aVlLxw4shoGqJAjf8m+syUeprQ3mQklkBZq25KmAXQeso3oOltyGTCcleGpk9ZXPqx1AILFkZhCTesTQZwCz7hbZ06NPfPy1TqFQjWCPZ3WshyY8SrGpxqlsQjayNYpVDiBAo4p5VbGCcldSBVoFhf1rNKRM20O6JuBo1ueRdEYEj9FasW68RQg29WALDfQojpQPZ+c+TwizroiLsQ0Kh+wNfUHjAJP1pXW9TM6b4lrXBxpCfsLygEnIQKX9A/Lw+H+sDoB5hCS4+QdfX3jcFOE42hWE0HgMcGTnhAOtIsE5IMTmNJh0HCX5n3k5Xgpvu4j8xMPXD48Niwcby+3HW090YcYZPFabJyrMob25KKVzNYWXk84VuDlOHLEE+G6s5yWIhjIuPRLqUv1EP4SzInYR//IR6j0wlDnKVGWbVHypuGBgVJ6DpVT7h9EDZRKHO38jLmGHdfPO07mCQRyzuWT/7/+ZMWXdyrubZD6XhXnobiVghtY89kkv/4aYpm51fmaGSWT62S6/LbbXN+TauubOywj9lXPeN/XPiaKtj+JORe+63tJbbo8ffNjr0x/ItpKDqe8HTGczt6V+vvfkt7a41ju4fe/wkMS5Qe/xHv9DQ4slf4rOJ0U/R9/4xu1Np+OFs0fqoOJ4/ebX/UOResfKpp/JddMPXCKpcuzL3xwd1jSrM/rkMgrz7PgKx8g/if/i/IPVhV1c208d2oAAAAASUVORK5CYII='} alt="img" />
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 34C26.3889 34 34 26.3888 34 17C34 7.61117 26.3889 0 17 0C7.61115 0 0 7.61117 0 17C0 26.3888 7.61115 34 17 34ZM22.3034 7.91932C22.5616 7.00235 21.6717 6.46011 20.859 7.03911L9.51416 15.1211C8.63279 15.749 8.77143 17 9.72241 17H12.7098V16.9769H18.5322L13.788 18.6508L11.6966 26.0807C11.4385 26.9977 12.3283 27.5399 13.141 26.9609L24.4859 18.8789C25.3673 18.251 25.2285 17 24.2776 17H19.7473L22.3034 7.91932Z" fill="#77ED91"/>
</svg>
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
                         <path d="M11 5.5325V19.2825"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M7.104 8.2825H5.0415"
                stroke="#E1E1E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M7.7915 11.0325H5.0415"
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
            <button onClick={()=> signOut(auth)}>Logout</button>
          </div>
          <div className="mode"><DarkMode/>
          </div>
        </div>
      </div>
    </div>
  );
};