import React, { Component } from 'react'
import Brand from '../../base/brand'
import Copyright from '../../base/copyright'
import DownloadApp from '../../base/downloadApp'
import Features from '../../base/features'
import Socmed from '../../base/socmed'
import styles from './Footer.module.css'

export class Footer extends Component {
    render() {
        return (
            <div className={`${styles.footer}`}>
                <div className={`${styles.footer_contents}`}>
                    <Brand />
                    <Features />
                    <DownloadApp />
                    <Socmed />
                </div>
                <div className={`${styles.rights}`}>
                    <Copyright />
                </div>
            </div>
        )
    }
}

export default Footer