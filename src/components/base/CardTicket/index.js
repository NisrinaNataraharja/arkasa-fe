import React, { Component } from 'react'
import style from './cardTicket.module.css'
import Garuda from '../../../assets/img/garuda-indonesia-logo.png'
import Smallplane from '../../../assets/img/planemini.png'
import Food from '../../../assets/img/food.png'
import Luggage from '../../../assets/img/luggage.png'
import Wifi from '../../../assets/img/wifi.png'

export default class CardTicket extends Component {
    render() {
        return (
            <div className={`${style.main} card`}>
                <div className="card-body">
                    <div className='d-flex'>
                        <img
                            className={`${style.planeIcon} m-3`}
                            src={Garuda}
                            alt='garuda-icon'
                        />
                        <p className='text-muted m-3 mt-4 fw-bold'>Garuda Indonesia</p>
                    </div>
                    <div className='d-flex mt-3'>
                        <div className='flex-column ms-3'>
                            <p className='p-0 m-0 h4'>IDN</p>
                            <p className='text-muted fs-6 fw-light'>12:33</p>
                        </div>
                        <div className='flex-column ms-3 me-3'>
                            <img
                                src={Smallplane}
                                alt='plane-logo'
                            />
                        </div>
                        <div className='flex-column me-5'>
                            <p className='p-0 m-0 h4'>JPN</p>
                            <p className='text-muted fs-6 fw-light'>15:21</p>
                        </div>
                        <div className='flex-column'>
                            <p className='p-0 m-0 text-muted fw-normal'>3 hours 11 minutes</p>
                            <p className='text-muted fw-light'>(1 transit)</p>
                        </div>
                        <div className='justify-content-between p-3 ms-3'>
                            <img
                                src={Luggage}
                                alt='luggage-logo'
                                className='ms-3 me-3'
                            />
                            <img
                                src={Food}
                                alt='food-logo'
                                className='ms-3 me-3'
                            />
                            <img
                                src={Wifi}
                                alt='wifi-logo'
                                className='ms-3 '
                            />
                        </div>
                        <div className='d-flex'>
                            <p className='text-muted m-3 me-4 '><span className='price text-primary fw-bold'>$ 214,00  </span>/pax</p>
                        </div>
                        <button className={style.btnSelect}>Select</button>
                    </div>
                </div>
            </div>
        )
    }
}
