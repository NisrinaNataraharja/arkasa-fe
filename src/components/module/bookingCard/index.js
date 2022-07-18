import Button from "../../base/button";
import React from "react";
import styles from "./booking.module.css";

const BookingCard = ({ date, time, from, to, maskapai, code, status }) => {
  return (
    <div className={styles.bookingCard}>
      <div className={styles.date}>
        {date ? date : "Monday,20 July'20"}-{time ? time : "12:33"}
      </div>
      <div className={styles.destination}>
        <div>{from ? from : "IDN"}</div>
        <div>
          <img src="/img/fligticon.svg" alt="" />
        </div>
        <div>{to ? to : "JPN"}</div>
      </div>
      <div className={styles.airline}>
        {maskapai ? maskapai : "Garuda Indonesia"}, {code ? code : "AB-221"}
      </div>
      <hr />
      <div className={styles.order}>
        <div className={styles.statusorder}>
          <span>Status</span>
          <Button title={status === "paid" ? "Eticket issued" : "Waiting for payment"} btn="status" color={status === "paid" ? "green" : "orange"} />
        </div>
        <span className={styles.details}>View Details</span>
      </div>
    </div>
  );
};

export default BookingCard;
