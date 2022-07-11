import React from "react";
import Logo from "../../components/base/logoLogin";
import Input from "../../components/base/input";
import Button from "../../components/base/button";
import styles from "./forgot.module.css";
import LogoBaner from "../../components/base/logobaner";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

const Forgot = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email format").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("form data", formik.values);
      swal("Send Email Succes!", "Anda berhasil konfirmasi email", "success");
      navigate("/login");
    },
  });
  return (
    <div className={styles.pageForgot}>
      <div className={styles.formBaner}>
        <LogoBaner />
      </div>
      <div className={styles.formForgot}>
        <div className={styles.formcontent}>
          <div className={styles.forgotTitle}>
            <Logo title="Ankasa" className="logoLogin" />
          </div>
          <h1>Forgot Password</h1>
          <form onSubmit={formik.handleSubmit}>
            <Input type="email" name="email" placeholder="Email" className="inputLogin" value={formik.values.email} onChange={formik.handleChange} />
            {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
            <Button title="Send" btn="login" color="blue" />
          </form>
          <p>You’ll get message soon on your email</p>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
