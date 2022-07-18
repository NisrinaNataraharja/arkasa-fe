import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './bookingDetail.module.css'
import option from '../../assets/img/iconOption.png'
import Garuda from '../../assets/img/garuda-indonesia-logo.png'
import plane from '../../assets/img/planemini.png'
import Qr from '../../assets/img/QR Code 1.png'


const BookingDetail = () => {
  return (
    <div className={style.main}>
      <div className="row justify-content-center align-items-center">
        <div className={`${style.card} p-3`}>
          <div className="container mt-5">
            <div className={`${style.pass} row`}>
              <div className="col-10 d-flex justify-content-between">
                <h4 className="fw-bold mb-4 ms-5">Booking Pass</h4>
              </div>
              <div className="col-2 ps-5 d-flex justify-content-between">
                <h3 className="text-info d-none d-md-block text-center">
                  <img
                    src={option}
                    alt='option'
                  />
                </h3>
              </div>
            </div>
            <div className="row justify-content-center mb-5 ">
              <div className={`${style.left} col-sm-7`}>
                <div className="row">
                  <div className={`${style.plane} col-sm-5 col-12 mb-4 mb-sm-0 `}>
                    <img
                      src={Garuda}
                      style={{ width: '100px', height: '57px', objectFit: 'center' }}
                      alt='airline-logo'
                    />
                  </div>
                  <div className={`${style.departure} col-sm-4 col-12 mt-3 d-flex justify-content-between`}>
                    <div className={`${style.country} mr-2`}>
                      IDN
                    </div>
                    <img className="m-2"
                      src={plane}
                      style={{ width: '18px', height: '17px', objectFit: 'center' }}
                      alt="planeMini" />
                    <div className={`${style.country} ml-2`}>
                      JPN
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-6 text-start">
                    <b className="small text-muted ">Code</b>
                    <p className="small">
                      AB-221
                    </p>
                  </div>
                  <div className="col-4 text-start">
                    <b className="small text-muted">Class</b>
                    <p className="small">Economy</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 text-start">
                    <b className="small text-muted">Terminal</b>
                    <p className="small">A</p>
                  </div>
                  <div className="col-4 text-start">
                    <b className="small text-muted">Gate</b>
                    <p className="small">221</p>
                  </div>
                </div>
                <div className="col-5 text-start">
                  <b className="small text-muted ">Departure</b>
                  <p className="small">
                    Monday, 20 July ‘20 - 12:33
                  </p>
                </div>
              </div>
              <div className={`${style.right} col-sm-3`}>
                <img
                  src={Qr}
                  alt="QR Code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingDetail