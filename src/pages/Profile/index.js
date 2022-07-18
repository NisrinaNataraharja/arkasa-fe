import React, { useEffect, useState } from "react";
import Button from "../../components/base/button";
import Input from "../../components/base/input";
import Footer from "../../components/module/footer";
import Navbar from "../../components/module/navbar";
import ProfileCard from "../../components/module/profileCard";
import styles from "./profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { detailProfile, editProfile } from "../../config/redux/actions/profileAction";
// import { useNavigate } from "react-router-dom";

const Profile = () => {
  // const navigate = useNavigate();
  const { profile } = useSelector((state) => state.profile);
  const id = profile.id;
  // console.log("console di page profile", id);
  const dispatch = useDispatch();

  const [dataProfile, setDataPofile] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    city: profile.city,
    address: profile.address,
    postalCode: profile.postalcode,
    photo: profile.photo,
  });

  console.log(dataProfile);

  const [file, setFile] = useState({
    file: null,
    priview: "",
  });

  const handleUploadChange = (e) => {
    console.log(e.target.files[0]);
    let upload = e.target.files[0];
    setFile(upload);
  };

  const handleData = (e) => {
    e.preventDefault();
    const localdata = localStorage.getItem("Arkasa");
    const { token } = JSON.parse(localdata);
    // console.log(id);
    const formData = new FormData();
    formData.append("name", dataProfile.name);
    formData.append("email", dataProfile.email);
    formData.append("phone", dataProfile.phone);
    formData.append("city", dataProfile.city);
    formData.append("address", dataProfile.address);
    formData.append("postalCode", dataProfile.postalCode);
    formData.append("photo", file);
    dispatch(editProfile(id, formData, token));
    dispatch(detailProfile(token));
    // .then(() => navigate("/profile"));
  };

  const handleChange = (e) => {
    const newdata = { ...dataProfile };
    newdata[e.target.name] = e.target.value;
    setDataPofile(newdata);
  };

  useEffect(() => {
    const localdata = localStorage.getItem("Arkasa");
    const { token } = JSON.parse(localdata);
    dispatch(detailProfile(token));
  }, []);

  return (
    <div className={styles.pageProfile}>
      <Navbar />
      <form>
        <div className={styles.content}>
          <div className={styles.profileContent}>
            <ProfileCard name={profile.name} city={profile.city} address={profile.address} profImg={profile.photo} noCard="4441 1235 5512 5551" typeCard="Z" saldoCard="1,440,2" onChange={handleUploadChange} />
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
                  <Input type="email" name="email" label="Email" placeholder={profile.email} className="inputProfile" onChange={(e) => handleChange(e)} value={dataProfile.email} />
                  <Input type="text" name="phone" label="Phone Number" placeholder={profile.phone} className="inputProfile" onChange={(e) => handleChange(e)} value={dataProfile.phone} />
                  <span>Acoount Setting</span>
                </div>
              </div>
              <div className={styles.biodata}>
                <div>Biodata</div>
                <div>
                  <Input type="text" name="name" label="name" placeholder={profile.name} className="inputProfile" onChange={(e) => handleChange(e)} value={dataProfile.name} />
                  <Input type="text" name="city" label="City" placeholder={profile.city} className="inputProfile" onChange={(e) => handleChange(e)} value={dataProfile.city} />
                  <Input type="text" name="address" label="Address" placeholder={profile.address} className="inputProfile" onChange={(e) => handleChange(e)} value={dataProfile.address} />
                  <Input type="text" name="postalCode" label="Post Code" placeholder={profile.postalcode} className="inputProfile" onChange={(e) => handleChange(e)} value={dataProfile.postalCode} />
                  <Button title="Save" btn="saveProfile" color="blue" onClick={(e) => handleData(e)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Profile;
