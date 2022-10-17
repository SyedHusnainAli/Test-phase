import React from "react";
import '../styles/contact.css';
import { Formik } from 'formik';

const Contact = () => (
  <div className="main-contact">
    <h1 className="touch">GET IN TOUCH!</h1>
    <a href='https://github.com/syedhusnainali' className="link" target="_blank" >SEE MY PROJECT IN /github.com/syedhusnainali</a>
    <h3 className="contactus">Contact forms are one of the web elements that exist in web design and development</h3>
    <Formik
       
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="fullName"
            placeholder="fullName"
            name="fullName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName}
          />
           {errors.fullName && touched.fullName && errors.fullName}
          
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
           {errors.email && touched.email && errors.email}
         
          <input
            className="password"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
           {errors.password && touched.password && errors.password}
       
           <input
           className="commit"
            type="comment"
            name="comment"
            placeholder="comment write here"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comment}
          />
           {errors.comment && touched.comment && errors.comment}

         
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Contact;


