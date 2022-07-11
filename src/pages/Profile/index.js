import React from "react";
import Button from "../../components/base/button";
import Input from "../../components/base/input";
import ProfileCard from "../../components/module/profileCard";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles.pageProfile}>
      <div className={styles.content}>
        <div className={styles.profileContent}>
          <ProfileCard name="Mike Kowalski" address="Medan,Indonesia" profImg="/img/profileexample.svg" noCard="4441 1235 5512 5551" typeCard="Z" saldoCard="1,440,2" />
        </div>
        <div className={styles.profileFrom}>
          <p>Profile</p>
          <div className={styles.orderTitle}>
            <div className={styles.titleProfile}>Profile</div>
          </div>
          <div className={styles.profileUdpate}>
            <div className={styles.contact}>
              <div>Contact</div>
              <div>
                <Input type="email" name="email" label="Email" placeholder="fligthbooking@ankasa.com" className="inputProfile" />
                <Input type="text" name="phone" label="Phone Number" placeholder="+6281987654321" className="inputProfile" />
                <span>Acoount Setting</span>
              </div>
            </div>
            <div className={styles.biodata}>
              <div>Biodata</div>
              <div>
                <Input type="text" name="username" label="Username" placeholder="Mike Kowalski" className="inputProfile" />
                <Input type="text" name="city" label="City" placeholder="Medan" className="inputProfile" />
                <Input type="text" name="address" label="Address" placeholder="Medan, Indeonesia" className="inputProfile" />
                <Input type="text" name="postcode" label="Post Code" placeholder="55555" className="inputProfile" />
                <Button title="Save" btn="saveProfile" color="blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
