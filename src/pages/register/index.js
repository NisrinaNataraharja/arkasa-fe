import React from "react";
import Logo from "../../components/base/logoLogin";
import Input from "../../components/base/input";
import Button from "../../components/base/button";
import styles from "./register.module.css";
import LogoBaner from "../../components/base/logobaner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import * as yup from "yup";
import { useFormik } from "formik";
import {registerUser} from '../../config/redux/actions/userAction'

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Required"),
      email: yup.string().email("Invalid email format").required("Required"),
      password: yup.string().min(8, "Minimum 8 character").required("Required"),
    }),
    onSubmit: (values) => {
        try {
          dispatch(registerUser(values, navigate))
          
        } catch (error) {
          swal.fire({
            title: "Error!",
            text: error,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6a4029",
        });
        }
      },
  });
  return (
    <div className={styles.pageRegister}>
      <div className={styles.formBaner}>
        <LogoBaner />
      </div>
      <div className={styles.formRegister}>
        <div className={styles.formcontent}>
          <div className={styles.registerTitle}>
            <Logo title="Ankasa" className="logoLogin" />
            <h1>Register</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <Input type="text" name="name" placeholder="Full Name" className="inputLogin" value={formik.values.name} onChange={formik.handleChange} />
            {formik.errors.name && formik.touched.name && <p>{formik.errors.name}</p>}
            <Input type="email" name="email" placeholder="Email" className="inputLogin" value={formik.values.email} onChange={formik.handleChange} />
            {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
            <Input type="password" name="password" placeholder="Password" className="inputLogin" value={formik.values.password} onChange={formik.handleChange} />
            {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
            <Button type="submit" title="Sign Up" btn="login" color="blue" />
          </form>
          <p className={styles.acc}>
            <Input type="checkbox" className="check" name="check" /> Accept terms and condition
          </p>
          <hr />
          <p>Already have an account?</p>
          <Link to="/login">
            <Button title="Sign In" btn="login" color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
