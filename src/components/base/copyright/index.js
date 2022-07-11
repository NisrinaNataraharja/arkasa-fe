import React, { Component } from 'react'
import styles from './Copyright.module.css'

export class Copyright extends Component {
    render() {
        return (
            <div className={`${styles.copyright}`}>
                <p>© Ankasa.  All Rights Reserved.</p>
                <div className={`${styles.location}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>Jakarta, Indonesia</p>
                </div>
            </div>
        )
    }
}

export default Copyright