import React, { Component } from 'react';
import { Formik } from 'formik';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import * as Yup from 'yup';
import 'firebase/firestore';
import './Newsletter.styles.scss';
import { contactRequest } from '../util/APIUtil';

import MailchimpSubscribe from "react-mailchimp-subscribe";
class Newsletter extends Component {
  state = {
    email: '',
    isValid: false,
    url: "https://brifiworks.us17.list-manage.com/subscribe/post?u=961f5a59b88e34109c66ce350&amp;id=6b902d5ee7"
  }

  /*handleSubmit = (state) =>{


  }*/

  handleChange = (values) => {
    this.setState({
      email: values.email
    })
  }

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('An email is required')
  })



  render() {
    return (
      <>
        <form>
          <MailchimpSubscribe url={this.state.url} />
          <div className="input-group">
            <input type="checkbox" />
            <span>By clicking "subscribe", you agree to receive Brifiworks' newsletter and accept our web terms of use and privacy and cookie policy.</span>
          </div>
        </form>
      </>
      // <div className='sign-up'>
      //   <Formik
      //     initialValues={{
      //       email: '',
      //       isSubmitting: true
      //     }}
      //     validationSchema={this.validationSchema}
      //     onSubmit={(values, { setSubmitting, resetForm }) => {

      //       /* INIZIO FORM NUOVO   */
      //       const dataform =
      //         Object.assign({},
      //           {
      //             "email": values.email

      //           });

      //       contactRequest(dataform)
      //       setSubmitting(true);
      //       resetForm();
      //       setSubmitting(false);

      //       /* 
      //       POPUP
      //       */

      //     }}
      //   >

      //     {({
      //       values,
      //       errors,
      //       touched,
      //       isSubmitting,
      //       handleChange,
      //       handleBlur,
      //       handleSubmit
      //     }) => (
      //       <form onSubmit={handleSubmit} noValidate className='sign-up-form'>
      //         <div className='form-control'>
      //           <label htmlFor='email'></label>
      //           {/* <FormInput
      //             type='email'
      //             name='email'
      //             onChange={handleChange}
      //             onBlur={handleBlur}
      //             value={values.email}
      //             label='Email *'
      //           /> */}
      //           <MailchimpSubscribe url={this.state.url} />
      //           <span className='error'>{errors.email && touched.email && errors.email}</span>
      //         </div>

      //         <div>
      //           <CustomButton type='submit' disabled={isSubmitting}>SEND</CustomButton>
      //         </div>
      //       </form>
      //     )}
      //   </Formik>
      // </div>
    );
  }
}

export default Newsletter;
