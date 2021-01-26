import React, { Component } from 'react';
import { Formik } from 'formik';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import * as Yup from 'yup';
import 'firebase/firestore';
import './Newsletter.styles.scss';
import { contactRequest } from '../util/APIUtil';



class Newsletter extends Component {

  state = {
    email: '',
    isValid: false,
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
      <div className='sign-up'>
        <Formik
          initialValues={{
            email: '',
            isSubmitting: true
          }}
          validationSchema={this.validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {

            /* INIZIO FORM NUOVO   */
            const dataform =
              Object.assign({},
                {
                  "email": values.email

                });

            contactRequest(dataform)
            setSubmitting(true);
            resetForm();
            setSubmitting(false);

            /* 
            POPUP
            */

          }}
        >

          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form onSubmit={handleSubmit} noValidate className='sign-up-form'>
              <div className='form-control'>
                <label htmlFor='email'></label>
                <FormInput
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  label='Email *'
                />
                <span className='error'>{errors.email && touched.email && errors.email}</span>
              </div>

              <div>
                <CustomButton type='submit' disabled={isSubmitting}>SEND</CustomButton>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Newsletter;
