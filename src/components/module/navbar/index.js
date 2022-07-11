import React, { useState } from 'react'
import LogoBrand from '../../base/logo'
import styles from './Navbar.module.css'

function Navbar() {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <nav className={`${styles.navbar}`}>
            <div className={`${styles.navbar_container}`}>
                <LogoBrand />
                <div className={`${styles.search_bar}`}>
                    <input type="text" placeholder='&#xF002; Where you want to go?' />
                </div>
                <div className={`${styles.menu}`}>
                    <p>Find Ticket</p>
                    <p>My Booking</p>
                </div>
                {isLogin === true ?
                    <div className={`${styles.user_menu}`}>
                        
                    </div>
                    :
                    <button className={`${styles.signup_btn}`}>Sign Up</button>
                    // sampai sini terakhir
                }
            </div>
        </nav>
    )
}

export default Navbar