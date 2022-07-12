import React, { Component } from 'react'
import styles from './Features.module.css'

export class Features extends Component {
  render() {
    return (
      <div className={`${styles.features}`}>
        <h3>Features</h3>
        <p>Ticket</p>
        <p>My Booking</p>
        <p>Chat</p>
        <p>Notification</p>
      </div>
    )
  }
}

export default Features