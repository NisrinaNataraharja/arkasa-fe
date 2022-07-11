import React, { Component } from 'react'
import Footer from '../../components/module/footer'
import Navbar from '../../components/module/navbar'
import Top10 from '../../components/module/top10'
import TrendingCard from '../../components/module/trendingCard'
import styles from './Home.module.css'

export class Home extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className={`${styles.home_page}`}>
                <Navbar />
                <main className={`${styles.main}`}>
                    <div className={`${styles.banner_1}`}>
                        <div>
                            <h1>Find Your <span>Flight</span></h1>
                            <p>and explore the world with us</p>
                        </div>
                        <img src="/assets/img/banner-1.png" alt="banner-1" />
                    </div>
                    <div className={`${styles.banner_2}`}>
                        <img src="/assets/img/banner-2.png" alt="banner-2" />
                        <svg width="232" height="246" viewBox="0 0 232 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M75.8267 2.00037C130.421 -11.0624 159.649 43.6408 187.892 84.1019C214.743 122.571 250.689 167.035 218.118 205.852C182.265 248.582 114.138 253.381 61.4892 234.747C15.3301 218.41 -2.09434 173.998 0.684063 128.895C3.84507 77.5814 18.834 15.6371 75.8267 2.00037Z" fill="#2395FF" />
                        </svg>
                    </div>
                </main>

                <div className={`${styles.trending}`}>
                    <div className={`${styles.trending_container}`}>
                        <p>trending</p>
                        <div>
                            <h3>Trending destinations</h3>
                            <p>view all</p>
                        </div>
                        <div className={`${styles.cards}`}>
                            <TrendingCard
                                src={'/assets/img/tokyo.jpg'}
                                airlinesCount={'15'}
                                city={'Tokyo'}
                                country={'Japan'}
                            />
                            <TrendingCard
                                src={'/assets/img/barcelona.jpg'}
                                airlinesCount={'8'}
                                city={'Barcelona'}
                                country={'Spain'}
                            />
                            <TrendingCard
                                src={'/assets/img/tokyo.jpg'}
                                airlinesCount={'15'}
                                city={'Tokyo'}
                                country={'Japan'}
                            />
                            <TrendingCard
                                src={'/assets/img/barcelona.jpg'}
                                airlinesCount={'8'}
                                city={'Barcelona'}
                                country={'Spain'}
                            />
                            <TrendingCard
                                src={'/assets/img/tokyo.jpg'}
                                airlinesCount={'15'}
                                city={'Tokyo'}
                                country={'Japan'}
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.top_10}`}>
                    <Top10 />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home