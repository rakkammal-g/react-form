import React from "react";
import { Formik } from "formik";
import "../App.css";
import * as Yup from "yup";
import Error from "./error";

// To create yup validation schema for form fields
const schema = Yup.object().shape({
  email: Yup.string()
    .email("Enter valid email address")
    .required("Email is required field"),
  password: Yup.string()
    .required("password is required field")
    .min(6, "password should contain minimum 6 characters"),
});

export default function Forms() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "has-error" : ""}
            />
            <Error touched={touched.email} message={errors.email} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={touched.password && errors.password ? "has-error" : ""}
            />
            <Error touched={touched.password} message={errors.password} />
          </div>
          <button disabled={isSubmitting}>Submit</button>
        </form>
      )}
    </Formik>
  );
}
