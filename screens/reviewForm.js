import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, ActionSheetIOS } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default ReviewForm = ({addReview}) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          body:'',
          rating: ''
        }}
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
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Review Body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            <Button title="submit" color="white" onPress={props.handleSubmit}/>
          </View>
       )} 
      </Formik>
    </View>
  )
}