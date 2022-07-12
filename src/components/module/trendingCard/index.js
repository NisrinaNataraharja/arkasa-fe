import React, { Component } from 'react'
import styles from './TrendingCard.module.css'

export class TrendingCard extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className={`${styles.trending_card}`}>
                <div className={`${styles.img_container}`}>
                    <img src={this.props.src} alt="img" />
                    <div className={`${styles.overlay}`}></div>
                    <div className={`${styles.card_info}`}>
                        <p><span>{this.props.airlinesCount}</span> airlines</p>
                        <div className={`${styles.location}`}>
                            <h4>{this.props.city}, <span>{this.props.country}</span></h4>
                            <div>{'>'}</div>
                            {/* sampai sini terakhir */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrendingCard