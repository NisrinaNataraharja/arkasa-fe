import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookingCard from "../../components/module/bookingCard";
import Footer from "../../components/module/footer";
import Navbar from "../../components/module/navbar";
import ProfileCard from "../../components/module/profileCard";
import styles from "./mybooking.module.css";
import { getBooking } from "../../config/redux/actions/bookingAction";
import moment from "moment";
import { detailProfile } from "../../config/redux/actions/profileAction";

const MyBooking = () => {
  const { isLoading, booking } = useSelector((state) => state.booking);
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    const localdata = localStorage.getItem("Arkasa");
    const { token } = JSON.parse(localdata);
    const id = localStorage.getItem("id");
    const formData = new FormData();
    formData.append("id", id);
    dispatch(detailProfile(token));
  }, []);

  const fethData = async () => {
    try {
      dispatch(getBooking());
    } catch (error) {
      console.log(error);
    }
    console.log("get data success");
  };

  useEffect(() => {
    fethData();
  }, []);

  return (
    <div className={styles.myBookingPage}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.profileContent}>
          <ProfileCard name={profile.name} city={profile.city} address={profile.address} profImg={profile.photo} noCard="4441 1235 5512 5551" typeCard="Z" saldoCard="1,440,2" />
        </div>
        <div className={styles.bookingContent}>
          <p>MyBooking</p>
          <div className={styles.orderTitle}>
            <span className={styles.titleBooking}>My Booking</span>
            <span className={styles.titleHistori}>Order History</span>
          </div>
          <div className={styles.historyBooking}>
            {isLoading === false
              ? booking.data?.map((item) => <BookingCard id={item.orderid} date={moment(item.createdat).format("LLLL")} from={item.origin} to={item.destination} maskapai={item.airlinename} code="" status={item.status} />)
              : "Data Loading..."}
            {/* <BookingCard date="Sunday, 29 Agust 22" time="00:00" from="SG" to="IDN" maskapai="Air ASIA" code="ABCD" status="0" /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyBooking;
