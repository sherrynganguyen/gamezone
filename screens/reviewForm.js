import React from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../shared/button';

const reviewSchema = yup.object().shape({
  title: yup
    .string()
    .required('*Required')
    .min(4, 'Too Short!')
    .max(30, 'Too Long!'),
  body: yup
    .string()
    .required('*Required')
    .min(8, 'Too Short!')
    .max(100, 'Too Long!!'),
  rating: yup
    .number()
    .required('*Required')
    .test('num 1-5', 'Must be a number from 1-5', (val) => {
      return val < 6 && val > 0;
    })
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          body:'',
          rating: ''
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
       {(props)=> (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review Title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Review Body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
              multiline minHeight={80}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
            <FlatButton text="Submit" onPress={props.handleSubmit}/>
          </View>
       )} 
      </Formik>
    </View>
  )
}