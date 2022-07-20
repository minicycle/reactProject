import { StyleSheet, Text, View,Button,Alert } from 'react-native'
import React from 'react'

const AlertComponent = () => {
    const simpleAlertHanler = ()=>{
        alert('Hello I am Simple Alert from JavaScript')
    }
    const twoOptionAlertHanler = ()=>{
        //use Alert from React Native
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two option alert from React Native',
            [
                {
                    text:'Yes',
                    onPress:()=> alert('No Pressed')
                },
                {
                    text:'No',
                    onPress:()=> alert('Yes Pressed'),
                    style:'cancel'
                }
            ],
            //clicking out side of alert will not cancel
            {cancelable:false}

        );
    }
  return (
    <View style={styles.container}>
      <Button
        title='Simple Alert'
        onPress={simpleAlertHanler}

      />
      <Button
        title='Alert with Two Option'
        onPress={twoOptionAlertHanler}
      />
    </View>
  )
}

export default AlertComponent

const styles = StyleSheet.create({
     container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#ecf0f1',
     
     },
 });