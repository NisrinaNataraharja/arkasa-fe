import React from "react";
import BookingCard from "../../components/module/bookingCard";
import ProfileCard from "../../components/module/profileCard";
import styles from "./mybooking.module.css";

const MyBooking = () => {
  return (
    <div className={styles.myBookingPage}>
      <div className={styles.content}>
        <div className={styles.profileContent}>
          <ProfileCard name="Mike Kowalski" address="Medan,Indonesia" profImg="/img/profileexample.svg" noCard="4441 1235 5512 5551" typeCard="Z" saldoCard="1,440,2" />
        </div>
        <div className={styles.bookingContent}>
          <p>MyBooking</p>
          <div className={styles.orderTitle}>
            <span className={styles.titleBooking}>My Booking</span>
            <span className={styles.titleHistori}>Order History</span>
          </div>
          <div className={styles.historyBooking}>
            <BookingCard />
            <BookingCard date="Sunday,21 Agust 22" time="00:00" from="SG" to="IDN" maskapai="Air ASIA" code="ABCD" status="paid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
