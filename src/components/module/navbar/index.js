import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LogoWithRouter } from "../../base/logo";
import UserAva from "../../base/userAva";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [menuActive, setMenuActive] = useState("");

  const handleMenuActive = (e) => {
    const menu = e.target.innerText;
    if (menu === "Find Ticket") {
      setIsModalActive(!isModalActive);
      setMenuActive(menu);
      if (isModalActive === true) {
        setMenuActive("");
      }
    } else {
      setMenuActive(menu);
      setIsModalActive(false);
    }
  };

  useEffect(() => {
    const localData = localStorage.getItem("Arkasa");
    if (localData) {
      setIsLogin(true);
    }
  }, []);
  console.log(isModalActive);
  console.log(menuActive);

  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.navbar_container}`}>
        <LogoWithRouter />
        <div className={`${styles.search_bar}`}>
          <input type="text" placeholder="&#xF002; Where you want to go?" />
        </div>
        <div className={`${styles.menu}`}>
          <p onClick={handleMenuActive} className={menuActive === "Find Ticket" ? `${styles.menu_active}` : ""}>
            Find Ticket
          </p>
          <p onClick={handleMenuActive} className={menuActive === "My Booking" ? `${styles.menu_active}` : ""}>
            <Link to="/mybooking">My Booking</Link>
          </p>
        </div>
        {isLogin === true ? (
          <div className={`${styles.user_menu}`}>
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.6 0H2.4C1.08 0 0.012 1.08 0.012 2.4L0 16.8C0 18.12 1.08 19.2 2.4 19.2H21.6C22.92 19.2 24 18.12 24 16.8V2.4C24 1.08 22.92 0 21.6 0ZM20.8 17.0522L3.5 17C2.84 17 2 16.26 2 15.6V4L10.728 9.62088C11.508 10.1129 12.492 10.1129 13.272 9.62088L22 4V15.8522C22 16.5122 21.46 17.0522 20.8 17.0522ZM12 8L2 2H22L12 8Z"
                fill="#595959"
              />
            </svg>
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.975 2.99609C10.4788 2.99609 10.0762 2.59342 10.0762 2.09727V1.19844C10.0762 0.702294 10.4788 0.299622 10.975 0.299622C11.4711 0.299622 11.8738 0.702294 11.8738 1.19844V2.09727C11.8738 2.59342 11.4711 2.99609 10.975 2.99609Z"
                fill="#595959"
              />
              <path
                d="M18.8188 10.8406C18.3226 10.8406 17.92 10.4379 17.92 9.94178C17.92 6.28896 14.9539 3.17634 11.3082 3.00376C7.6581 2.83523 4.4039 5.6463 4.0601 9.278C4.03943 9.49506 4.02909 9.71797 4.02909 9.94178C4.02909 10.4379 3.62642 10.8406 3.13027 10.8406C2.63412 10.8406 2.23145 10.4379 2.23145 9.94178C2.23145 9.66134 2.24448 9.38091 2.27054 9.10857C2.70333 4.53536 6.80062 0.992196 11.3932 1.20836C15.9835 1.42543 19.7176 5.3434 19.7176 9.94178C19.7176 10.4384 19.3149 10.8406 18.8188 10.8406Z"
                fill="#595959"
              />
              <path
                d="M20.504 16.971C20.2825 16.971 20.06 16.8892 19.8861 16.7252C18.6367 15.5423 17.9199 13.8768 17.9199 12.156C17.9199 11.6599 18.3226 11.2572 18.8187 11.2572C19.3149 11.2572 19.7176 11.6599 19.7176 12.156C19.7176 13.3852 20.2294 14.5752 21.122 15.4197C21.4824 15.7608 21.4981 16.3297 21.157 16.6906C20.9804 16.8766 20.7422 16.971 20.504 16.971Z"
                fill="#595959"
              />
              <path
                d="M1.44479 16.971C1.20615 16.971 0.96841 16.8771 0.791791 16.6901C0.450687 16.3297 0.466416 15.7608 0.826845 15.4197C1.71938 14.5752 2.23126 13.3856 2.23126 12.156C2.23126 11.6599 2.63393 11.2572 3.13008 11.2572C3.62623 11.2572 4.02891 11.6599 4.02891 12.156C4.02891 13.8777 3.31209 15.5432 2.06273 16.7252C1.88836 16.8892 1.66635 16.971 1.44479 16.971Z"
                fill="#595959"
              />
              <path
                d="M10.9746 23.6691C8.53877 23.6691 6.48047 21.6108 6.48047 19.1749C6.48047 18.6788 6.88314 18.2761 7.37929 18.2761C7.87544 18.2761 8.27812 18.6788 8.27812 19.1749C8.27812 20.6364 9.5131 21.8714 10.9746 21.8714C12.4361 21.8714 13.6711 20.6364 13.6711 19.1749C13.6711 18.6788 14.0737 18.2761 14.5699 18.2761C15.066 18.2761 15.4687 18.6788 15.4687 19.1749C15.4687 21.6108 13.4104 23.6691 10.9746 23.6691Z"
                fill="#595959"
              />
              <path
                d="M2.68032 20.0738C1.5851 20.0738 0.610779 19.4042 0.19777 18.3678C-0.215689 17.3301 0.0310381 16.1729 0.826497 15.4197C1.18692 15.0781 1.75543 15.0939 2.09743 15.4543C2.43854 15.8147 2.42326 16.3837 2.06283 16.7252C1.66914 17.0982 1.81385 17.5679 1.86778 17.7027C1.92126 17.8366 2.13833 18.2761 2.68032 18.2761C3.17647 18.2761 3.57914 18.6788 3.57914 19.175C3.57914 19.6711 3.17692 20.0738 2.68032 20.0738Z"
                fill="#595959"
              />
              <path
                d="M19.268 20.0737C18.7718 20.0737 18.3691 19.6711 18.3691 19.1749C18.3691 18.6788 18.7718 18.2761 19.268 18.2761C19.8104 18.2761 20.0279 17.8348 20.0818 17.6995C20.1353 17.5651 20.2796 17.0973 19.8859 16.7247C19.5255 16.3832 19.5097 15.8147 19.8508 15.4538C20.1924 15.0934 20.7609 15.0776 21.1218 15.4187C21.9172 16.172 22.1644 17.3283 21.7519 18.3642C21.3384 19.4028 20.3632 20.0737 19.268 20.0737Z"
                fill="#595959"
              />
              <path
                d="M3.13027 13.0544C2.63412 13.0544 2.23145 12.6517 2.23145 12.1556V9.94176C2.23145 9.44561 2.63412 9.04294 3.13027 9.04294C3.62643 9.04294 4.0291 9.44561 4.0291 9.94176V12.1556C4.0291 12.6517 3.62688 13.0544 3.13027 13.0544Z"
                fill="#595959"
              />
              <path
                d="M18.8187 13.0544C18.3226 13.0544 17.9199 12.6517 17.9199 12.1556V9.94176C17.9199 9.44561 18.3226 9.04294 18.8187 9.04294C19.3149 9.04294 19.7176 9.44561 19.7176 9.94176V12.1556C19.7176 12.6517 19.3149 13.0544 18.8187 13.0544Z"
                fill="#595959"
              />
              <path
                d="M19.2679 20.0738H2.68007C2.18392 20.0738 1.78125 19.6711 1.78125 19.1749C1.78125 18.6788 2.18392 18.2761 2.68007 18.2761H19.2674C19.7636 18.2761 20.1662 18.6788 20.1662 19.1749C20.1662 19.6711 19.764 20.0738 19.2679 20.0738Z"
                fill="#595959"
              />
            </svg>
            <Link to="/profile">
              <UserAva source={"/assets/img/user.jpg"} className={`${styles.profile_img}`} />
            </Link>
          </div>
        ) : (
          <NavLink to="/login">
            <button className={`${styles.signup_btn}`}>Sign Up</button>
          </NavLink>
        )}
      </div>
      {isModalActive && (
        <div className={`${styles.find_ticket_modal}`}>
          <h5>Hey, Where you want to go?</h5>
          <div className={`${styles.recently}`}>
            <p>Recently Searched</p>
            <img src="/assets/img/icons/btnback.png" alt="" />
          </div>
          <div className={`${styles.departures}`}>
            <div className={`${styles.from}`}>
              <p>From</p>
              <h4>Medan</h4>
              <p>Indonesia</p>
            </div>
            <img src="/assets/img/icons/two-way.png" alt="" />
            <div className={`${styles.to}`}>
              <p>To</p>
              <h4>Tokyo</h4>
              <p>japan</p>
            </div>
          </div>
          <div className={`${styles.route}`}>
            <button className={`${styles.one_way}`}>
              <img src="/assets/img/icons/one-way.png" alt="" />
              <span>One Way</span>
            </button>
            <button className={`${styles.round_trip}`}>
              <img src="/assets/img/icons/round-trip.png" alt="" />
              <span>Round Trip</span>
            </button>
          </div>
          <div className={`${styles.date}`}>
            <label htmlFor="">Departure</label>
            <input type="date" />
          </div>
          <div className={`${styles.passenger_count}`}>
            <label htmlFor="">How many persons?</label>
            <div>
              <input type="number" name="child" placeholder="child" />
              <input type="number" name="adult" placeholder="adult" />
            </div>
          </div>
          <div className={`${styles.class}`}>
            <label htmlFor="">Which class do you want?</label>
            <div>
              <label htmlFor="economy">
                <input type="radio" name="class" id="economy" />
                Economy
              </label>
              <label htmlFor="business">
                <input type="radio" name="class" id="business" />
                Business
              </label>
              <label htmlFor="firstClass">
                <input type="radio" name="class" id="firstClass" />
                First Class
              </label>
            </div>
          </div>
          <button className={`${styles.search_btn}`}>
            search flight
            <img src="/assets/img/icons/right-arrow.png" alt="" />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
