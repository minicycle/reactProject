import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Greeting = ({fName1,fName2,lName1,lName2})=>{
    return(
        <view style={{alignItems:'center'}}>
        <Text>Your First Name is {fName1}! and Last name is {lName1}</Text>
        
        </view>
    )
}
const MyCustomTextWith = () => {
  return (
    <View style={{alignItems:'center',top:300}}>
        <Greeting fName1='Thanarat' lName1='Pongjan' />
        <Greeting fName1='Napat' lName1='Tourgam' />
    </View>
  )
}

export default MyCustomTextWith

