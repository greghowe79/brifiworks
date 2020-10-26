import React, { Component } from 'react';
import { Formik } from 'formik';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import * as Yup from 'yup';
import {firestore} from '../../firebase/firebase.utils';
import 'firebase/firestore';
import './sign-up.styles.scss';
import {contactRequest, provaRequest} from '../util/APIUtil';



class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        textArea1: '',
        isValid: false,   
      }

    /*handleSubmit = (state) =>{


    }*/

    handleChange = (values) => {
        this.setState({
            firstName: values.firstName,
            lastName: values.lastName,
            company: values.company,
            email: values.email,
            textArea1: values.textArea1
        })
    }

    validationSchema = Yup.object().shape({
        firstName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter a valid first name').min(2, 'Invalid first name').max(15, 'Invalid first name').required('Field is required'),
        lastName : Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter a valid last name').min(2, 'Invalid last name').max(30, 'Invalid last name').required('Field is required'),
        company: Yup.string().required('Field is required'),
        email: Yup.string()
            .email('Invalid email')
            .required('An email is required')
    })
        
        

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>Contact us</h2>

                

                <Formik
                    initialValues={{ 
                        firstName: '',
                        lastName: '',
                        company: '',
                        email: '',
                        address: '',
                        textArea1: '',
                        isSubmitting: true
                    }}
                    validationSchema={this.validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        
                     /* INIZIO FORM NUOVO   
                        const dataform =
                        Object.assign({}, 
                            {   
                                "firstname": values.firstName,
                                "lastname": values.lastName,
                                "company": values.company,
                                "email": values.email,
                                "message": values.textArea1
                            
                        });
                        
                    /*{
                            firstname: values.firstName,
                            lastname: values.lastName,
                            company: values.company,
                            email: values.email,
                            message: values.textArea1
                        };
                        alert(JSON.stringify(dataform));
                        contactRequest(JSON.stringify(dataform))
        .then(response => { alert(JSON.stringify(response));
        }).catch(error => {
                
        }); FINE FORM NUOVO*/
                        
                        setTimeout(() => {
                            const db = firestore;
                            db.collection('users').add({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            company: values.company,
                            email: values.email,
                            textArea1: values.textArea1
                            }
                            
                            ); 
                            
                            setSubmitting(true)
                            resetForm();
                            setSubmitting(false);
                        }, 400);
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
                        {/*firstName*/}
                        <div className='form-control'>
                        <label htmlFor='firstname'></label>
                        <FormInput
                            type='text'
                            name='firstName' 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            label='First Name *'
                        />
                        <span className='error'>{errors.firstName && touched.firstName && errors.firstName}</span>
                        </div>


                        <div className='form-control'>
                        <label htmlFor='lastname'></label>
                        <FormInput
                            type='text'
                            name='lastName' 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            label='Last Name *'
                        />
                        <span className='error'>{errors.lastName && touched.lastName && errors.lastName}</span>
                        </div>


                        <div className='form-control'>
                        <label htmlFor='company'></label>
                        <FormInput
                            type='text'
                            name='company' 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.company} 
                            label='Company *'   
                        />
                        <span className='error'>{errors.company && touched.company && errors.company}</span>
                        </div>

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

                        <div className='form-control'>
                        <label htmlFor='textarea1'></label>
                        <textarea
                            placeholder='Why contacting Brifiworks?'
                            id='textarea1' 
                            name='textArea1' 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.textArea1}
                        />
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

export default SignUp;