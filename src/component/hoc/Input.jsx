import React from 'react';
import { Field, ErrorMessage } from 'formik';

export const Input = ({ label, ...props }) =>  {

  return (
  <>
    <p><label htmlFor={props.id || props.name}>{label}</label></p>
    <Field {...props}/>
    <ErrorMessage name={props.name} component='div' />
  </>
  )
};



