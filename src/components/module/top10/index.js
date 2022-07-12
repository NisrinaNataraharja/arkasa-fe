import React, { Component } from 'react'
import styles from './Top10.module.css'
import './top10.css'

// Swiper js carousel
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export class Top10 extends Component {
    render() {
        return (
            <div className={`${styles.top10_container}`}>
                <h4>TOP 10</h4>
                <h2>Top 10 destinations</h2>
                <div className={`${styles.top_destinations}`}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={5}
                        loop={true}
                        navigation
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className={`${styles.place_img}`}>
                                <img src="/assets/img/paris.jpg" alt="" />
                            </div>
                            <p>paris</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.place_img}`}>
                                <img src="/assets/img/bali.jpg" alt="" />
                            </div>
                            <p>bali</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.place_img}`}>
                                <img src="/assets/img/singapore.jpg" alt="" />
                            </div>
                            <p>singapore</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.place_img}`}>
                                <img src="/assets/img/agra.jpg" alt="" />
                            </div>
                            <p>agra</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.place_img}`}>
                                <img src="/assets/img/sydney.jpg" alt="" />
                            </div>
                            <p>sydney</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        )
    }
}

export default Top10