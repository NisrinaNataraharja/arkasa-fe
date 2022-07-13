import React from "react";
import Logo from "../../components/base/logoLogin";
import Input from "../../components/base/input";
import Button from "../../components/base/button";
import styles from "./login.module.css";
import LogoBaner from "../../components/base/logobaner";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email format").required("Required"),
      password: yup.string().min(8, "Minimum 8 character").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("form data", formik.values);
      swal("Login Succes!", "success anda berhasil login", "success");
      navigate("/");
    },
  });

  return (
    <div className={styles.pagelogin}>
      <div className={styles.formBaner}>
        <LogoBaner />
      </div>
      <div className={styles.formLogin}>
        <div className={styles.formcontent}>
          <div className={styles.loginTitle}>
            <Logo title="Ankasa" className="logoLogin" />
            <h1>Login</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <Input type="email" name="email" placeholder="Email" className="inputLogin" value={formik.values.email} onChange={formik.handleChange} />
            {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
            <Input type="password" name="password" placeholder="Password" className="inputLogin" value={formik.values.password} onChange={formik.handleChange} />
            {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
            <Button type="submit" title="Sign In" btn="login" color="blue" />
          </form>
          <p>Did you forgot your password?</p>
          <Link to="/forgot">Tap here for reset</Link>
          <Link to="/register">Register</Link>
          <hr />
          <p>or sign in with</p>
          <div className={styles.icon}>
            <div className={styles.subicon}>
              <img src="/img/google.svg" alt="" />
            </div>
            <div className={styles.subicon}>
              <img src="/img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
