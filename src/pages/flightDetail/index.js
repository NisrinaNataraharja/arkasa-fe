import React, { useEffect, useState } from 'react'
import Navbar from '../../components/module/navbar'
import styles from './FlightDetail.module.css'
import CountryCode from './CountryCodes.json'
import Footer from '../../components/module/footer'

function FlightDetail() {

    const [countryCode, setCountryCode] = useState(CountryCode)
    const [isValid, setisValid] = useState(true)
    const [fligthDetails, setFlightDetails] = useState('')

    useEffect(() => {
        setFlightDetails({ ...fligthDetails, dialCode: '+62', title: 'mr', nationality: 'Indonesia' })
    }, [])

    const handleChange = (e) => {
        e.persist()

        setFlightDetails({ ...fligthDetails, [e.target.name]: e.target.value })
    }

    const handleInsurance = (e) => {
        e.persist()

        if(fligthDetails.insurance === true) {
            setFlightDetails({ ...fligthDetails, insurance: false })
        } else {
            setFlightDetails({ ...fligthDetails, insurance: true })

        }
        
    }

    console.log(fligthDetails)

    return (
        <div className={`${styles.flight_detail}`}>
            <Navbar />
            <div className={`${styles.detail_bg}`}>
            </div>
            <div className={`${styles.detail_container}`}>
                <div className={`${styles.detail_1}`}>
                    <div className={`${styles.contact_person}`}>
                        <h3>Contact Person Details</h3>
                        <form className={`${styles.contact_form}`}>
                            <div className={`${styles.input_form}`}>
                                <label htmlFor='name'>Full Name</label>
                                <input
                                    type="text"
                                    placeholder='Your full name'
                                    id='name'
                                    name='name'
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={`${styles.input_form}`}>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type="text"
                                    placeholder='youremail@gmailcom'
                                    id='email'
                                    name='email'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={`${styles.input_form}`}>
                                <label htmlFor='phone'>Phone Number</label>
                                <div className={`${styles.phone_number}`}>
                                    <select name="dialCode" id="dial" defaultValue={`+62`}
                                        onChange={handleChange}
                                    >
                                        {countryCode && countryCode.map((dial, idx) => {
                                            return (
                                                <option
                                                    value={dial.dial_code}
                                                    key={idx}
                                                >
                                                    ({dial.code}) {dial.dial_code}
                                                </option>
                                            )
                                        })
                                        }
                                    </select>
                                    <span></span>
                                    <input
                                        type="text"
                                        placeholder='87784799xxx'
                                        id='phone'
                                        name='phone'
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            {isValid &&
                                <div className={`${styles.validation}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.3998 20.0625L12.6498 3.1875C12.5045 2.93672 12.2537 2.8125 12.0006 2.8125C11.7475 2.8125 11.4943 2.93672 11.3514 3.1875L1.60138 20.0625C1.31309 20.5641 1.67403 21.1875 2.25059 21.1875H21.7506C22.3272 21.1875 22.6881 20.5641 22.3998 20.0625ZM11.2506 9.75C11.2506 9.64687 11.335 9.5625 11.4381 9.5625H12.5631C12.6662 9.5625 12.7506 9.64687 12.7506 9.75V14.0625C12.7506 14.1656 12.6662 14.25 12.5631 14.25H11.4381C11.335 14.25 11.2506 14.1656 11.2506 14.0625V9.75ZM12.0006 18C11.7062 17.994 11.4259 17.8728 11.2198 17.6625C11.0137 17.4522 10.8983 17.1695 10.8983 16.875C10.8983 16.5805 11.0137 16.2978 11.2198 16.0875C11.4259 15.8772 11.7062 15.756 12.0006 15.75C12.295 15.756 12.5753 15.8772 12.7814 16.0875C12.9874 16.2978 13.1029 16.5805 13.1029 16.875C13.1029 17.1695 12.9874 17.4522 12.7814 17.6625C12.5753 17.8728 12.295 17.994 12.0006 18Z" fill="#F24545" />
                                    </svg>
                                    <p>Make sure the customer data is correct.</p>
                                </div>
                            }
                        </form>
                    </div>
                    <div className={`${styles.passenger_detail1}`}>
                        <h3>Passenger Details</h3>
                        <form className={`${styles.pass_detail_form}`}>
                            <div className={`${styles.detail_action}`}>
                                <p>Passenger: <span>1</span> adult</p>
                                <div className={`${styles.action_toggler}`}>
                                    <p>Same as contact person</p>
                                    <label className="form-switch">
                                        <input type="checkbox" />
                                        <i></i>
                                    </label>
                                </div>
                            </div>
                            <div className={`${styles.input_form} ${styles.input_select}`}>
                                <label htmlFor='title'>Title</label>
                                <select name="title" id="title" onChange={handleChange}>
                                    <option value="mr">Mr.</option>
                                    <option value="mrs">Mrs.</option>
                                </select>
                            </div>
                            <div className={`${styles.input_form}`}>
                                <label htmlFor='fullName'>Full Name</label>
                                <input
                                    type="text"
                                    placeholder='Your full name'
                                    id='fullName'
                                    name='fullName'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={`${styles.input_form} ${styles.input_select}`}>
                                <label htmlFor='nationality'>Nationality</label>
                                <select name="nationality" id="nationality" defaultValue={'Indonesia'} onChange={handleChange}>
                                    <option value="">Select nationality</option>
                                    {countryCode && countryCode.map((dial, idx) => {
                                        return (
                                            <option
                                                value={dial.name}
                                                key={idx}
                                            >
                                                {dial.name}
                                            </option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className={`${styles.passenger_detail2}`}>
                        <h3>Passenger Details</h3>
                        <div className={`${styles.pass_detail2_form}`}>
                            <div className={`${styles.insurance}`}>
                                <div className={`${styles.checkbox}`}>
                                    <label htmlFor='insurance' className={`${styles.container}`}>Travel Insurance
                                        <input type="checkbox" name='insurance' id='insurance' onClick={handleInsurance}/>
                                        <span className={`${styles.checkmark}`}></span>
                                    </label>
                                </div>
                                <div className={`${styles.insurance_price}`}>
                                    <p>$ 2,00<span>/pax</span></p>
                                </div>
                            </div>
                            <div className={`${styles.insurance_desc}`}>
                                <p>Get travel compensation up to $ 10.000,00</p>
                            </div>
                        </div>
                    </div>
                    <button className={`${styles.proceed_btn}`}>
                        Proceed to Payment
                    </button>
                </div>
                <div className={`${styles.detail_2}`}>
                    <div className={`${styles.fligth_details}`}>
                        <div className={`${styles.fligth_title}`}>
                            <h3>Fligth Details</h3>
                            <p>view detail</p>
                        </div>
                        <div className={`${styles.details_container}`}>
                            <div className={`${styles.details}`}>
                                <div className={`${styles.airlines}`}>
                                    <img src="/assets/img/icons/garuda-indonesia.png" alt="airlines-brand" />
                                    <p>Garuda Indonesia</p>
                                </div>
                                <div className={`${styles.departure}`}>
                                    <h4>Medan(IDN)</h4>
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.5559 15.6H0.475875C0.213001 15.6 8.45316e-05 15.8685 8.45316e-05 16.2V17.4C8.45316e-05 17.7315 0.213001 18 0.475875 18H18.5559C18.8188 18 19.0317 17.7315 19.0317 17.4V16.2C19.0317 15.8685 18.8188 15.6 18.5559 15.6ZM2.39539 11.5977C2.58214 11.8542 2.84442 11.9997 3.11889 11.9993L7.00074 11.9926C7.30709 11.9921 7.60904 11.9006 7.88215 11.7256L16.5344 6.1888C17.3296 5.67993 18.0424 4.95357 18.5274 4.00221C19.0718 2.93423 19.131 2.16136 18.916 1.61537C18.7016 1.069 18.1803 0.66776 17.1838 0.586011C16.2962 0.513263 15.4133 0.808008 14.6181 1.3165L11.6888 3.1911L5.18531 0.113894C5.10711 0.0474663 5.01627 0.00858352 4.92216 0.00126566C4.82806 -0.0060522 4.73412 0.0184604 4.65004 0.0722692L2.69484 1.32363C2.37755 1.5265 2.30083 2.06049 2.5411 2.39348L7.1866 6.07218L4.11746 8.0364L1.96599 6.6688C1.89187 6.62167 1.80999 6.59718 1.72698 6.59731C1.64397 6.59744 1.56215 6.62219 1.48812 6.66955L0.294777 7.43341C-0.015676 7.63216 -0.0974525 8.1504 0.129143 8.48639L2.39539 11.5977Z" fill="#979797" />
                                    </svg>
                                    <h4>Tokyo(JPN)</h4>
                                </div>
                                <div className={`${styles.date}`}>
                                    <p>Sunday, 15 August 2020</p>
                                    <p>12:33 - 15:21</p>
                                </div>
                                <div className={`${styles.note}`}>
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="9.25" fill="white" stroke="#2395FF" strokeWidth="1.5" />
                                            <path d="M14.4238 7.20523C14.1553 6.93171 13.72 6.93159 13.4513 7.20486L8.43755 12.3097L6.17367 10.0047C5.90503 9.73141 5.46966 9.73157 5.20122 10.0051C4.93278 10.2786 4.93295 10.7219 5.20159 10.9952L7.95151 13.795C8.21999 14.0683 8.65516 14.0683 8.9236 13.795L14.4234 8.19533C14.692 7.92202 14.6922 7.47875 14.4238 7.20523Z" fill="#2395FF" />
                                        </svg>
                                        <p>Refundable</p>
                                    </div>
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="9.25" fill="white" stroke="#2395FF" strokeWidth="1.5" />
                                            <path d="M14.4238 7.20523C14.1553 6.93171 13.72 6.93159 13.4513 7.20486L8.43755 12.3097L6.17367 10.0047C5.90503 9.73141 5.46966 9.73157 5.20122 10.0051C4.93278 10.2786 4.93295 10.7219 5.20159 10.9952L7.95151 13.795C8.21999 14.0683 8.65516 14.0683 8.9236 13.795L14.4234 8.19533C14.692 7.92202 14.6922 7.47875 14.4238 7.20523Z" fill="#2395FF" />
                                        </svg>
                                        <p>Can reschedule</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.total}`}>
                                <h3>Total Payment</h3>
                                <h2>$ 145,00</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FlightDetail