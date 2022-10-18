import React from "react";
import '../styles/contact.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () => (
  <div className="main-contact">
    <div className="layout"></div>
    <h1 className="touch">GET IN TOUCH!</h1>
    <a href='https://github.com/syedhusnainali' className="link" target="_blank" >SEE MY PROJECT IN /github.com/syedhusnainali</a>
    <h3 className="contactus">Contact forms are one of the web elements that exist in web design and development</h3>
    <Formik

       initialValues={{ email: '', password: '', Name:'' }}
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
       {({ isSubmitting }) => (

         <Form className="styleForm">
           <div className="form-1">
           <Field type="Name" name="Name" placeholder="Your comment" className='Names'/>
           <ErrorMessage name="Name" component="div" />
           <Field type="email" name="email" placeholder="Your email" className='Names'/>
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" placeholder="Your password" className='Names'/>
           <ErrorMessage name="password" component="div" />
           </div>
           <div className="form-2">
           <Field type="Name" name="Name" placeholder="Your comment" className="comit"/>
           <ErrorMessage name="Name" component="div" />

           <button type="submit" className="btn" disabled={isSubmitting}>
             Submit
           </button>
           </div>
         </Form>

       )}
     </Formik>
  </div>
);

export default Contact;


