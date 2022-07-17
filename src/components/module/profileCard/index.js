import React from "react";
// import Button from "../../base/button";
import styles from "./profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Input from "../../base/input";

const ProfileCard = ({ name, city, address, profImg, noCard, typeCard, saldoCard, onChange }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await localStorage.clear();
    swal({
      title: "Log Out",
      text: `Log Out Success`,
      icon: "success",
    });
    navigate("/login");
  };
  return (
    <div className={styles.profileCard}>
      <div className={styles.wraperProfile}>
        <img src={profImg ? profImg : ""} alt="" />
      </div>
      <div>
        <Input label="Select photo" name="files" id="files" className="inputFoto" classNameLabel="labelFoto" type="file" onChange={onChange} />
      </div>
      <div className={styles.name}>{name ? name : ""}</div>
      <div className={styles.address}>
        {city ? city : ""}, {address ? address : ""}
      </div>
      <div className={styles.titleCard}>
        <div>Cards</div>
        <div>+ Add</div>
      </div>
      <div className={styles.contentCard}>
        <div>{noCard ? noCard : ""}</div>
        <div className={styles.cardType}>
          <div>{typeCard ? typeCard : ""} Card</div>
          <div>$ {saldoCard ? saldoCard : ""}</div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.subMenu}>
          <div className={styles.user}>
            <img src="/img/user.svg" alt="" />
          </div>
          <Link to="/profile">
            <div>Profile</div>
          </Link>
        </div>
        <div className={styles.subMenu}>
          <div>
            <img src="/img/myreview.svg" alt="" />
          </div>
          <Link to="">
            <div>My Review</div>
          </Link>
        </div>
        <div className={styles.subMenu}>
          <div>
            <img src="/img/setting.svg" alt="" />
          </div>
          <Link to="">
            <div>Settings</div>
          </Link>
        </div>
        <div className={styles.subMenu}>
          <div>
            <img src="/img/exit.svg" alt="" />
          </div>
          <Link to="">
            <div onClick={handleLogout}>Logout</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
