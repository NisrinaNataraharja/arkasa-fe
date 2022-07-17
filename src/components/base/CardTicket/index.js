import React from 'react'
import style from './cardTicket.module.css'
// import Garuda from '../../../assets/img/garuda-indonesia-logo.png'
import Smallplane from '../../../assets/img/planemini.png'
import Food from '../../../assets/img/food.png'
import Luggage from '../../../assets/img/luggage.png'
import Wifi from '../../../assets/img/wifi.png'


const CardTicket = ({image, airline, origin, destination, transit, departure, arrive}) => {
    return (
        <div className={`${style.main} card mb-4`}>
            <div className="card-body">
                <div className='d-flex'>
                    <img
                        className={`${style.planeIcon} m-3`}
                        src={image}
                        alt='garuda-icon'
                    />
                    <p className='text-muted m-3 mt-4 fw-bold'>{airline}</p>
                </div>
                <div className='d-flex mt-3'>
                    <div className='flex-column ms-3'>
                        <p className='p-0 m-0 h4'>{origin}</p>
                        <p className='text-muted fs-6 fw-light'>{departure}</p>
                    </div>
                    <div className='flex-column ms-3 me-3'>
                        <img
                            src={Smallplane}
                            alt='plane-logo'
                        />
                    </div>
                    <div className='flex-column me-5'>
                        <p className='p-0 m-0 h4'>{destination}</p>
                        <p className='text-muted fs-6 fw-light'>{arrive}</p>
                    </div>
                    <div className='flex-column'>
                        <p className='p-0 m-0 text-muted fw-normal'>3 hours 11 minutes</p>
                        <p className='text-muted fw-light'>({transit})</p>
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

export default CardTicket
