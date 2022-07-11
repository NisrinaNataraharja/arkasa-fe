import React, { Component } from 'react'
import styles from './DownloadApp.module.css'

export class DownloadApp extends Component {
  render() {
    return (
      <div className={`${styles.download}`}>
        <h3>Download Ankasa App</h3>
        <img src="/assets/img/app-store.png" alt="app-store" />
        <img src="/assets/img/google-play.png" alt="google-play" />
      </div>
    )
  }
}

export default DownloadApp