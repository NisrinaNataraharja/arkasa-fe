import Button from "../../base/button";
import React from "react";
import styles from "./booking.module.css";
import { Link } from "react-router-dom";

const BookingCard = ({ date, id, from, to, maskapai, code, status }) => {
  return (
    <div className={styles.bookingCard}>
      <div className={styles.date}>{date ? date : ""}</div>
      <div className={styles.destination} key={id}>
        <div>{from ? from : ""}</div>
        <div>
          <img src="/img/fligticon.svg" alt="" />
        </div>
        <div>{to ? to : ""}</div>
      </div>
      <div className={styles.airline}>
        {maskapai ? maskapai : ""}, {code ? code : ""}
      </div>
      <hr />
      <div className={styles.order}>
        <div className={styles.statusorder}>
          <span>Status</span>
          <Button title={status === 1 ? "Eticket issued" : "Waiting for payment"} btn="status" color={status === 1 ? "green" : "orange"} />
        </div>
        <Link to={`/bookingDetail/${id}`}>
          <p>View Detail</p>
        </Link>
      </div>
    </div>
  );
};

export default BookingCard;
