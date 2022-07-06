import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Greeting = ({name ,date})=>{
    return(
        <view style={{alignItems:'center'}}>
        <Text>Hello {name}{date}</Text>
        </view>
    )
}

const LotsOfGreetings = () => {
  return (
    <View style={{alignItems:'center',top:50}}>
        <Greeting name='Marry Christmas' date=' 25-Dec-2022'/>
        <Greeting name='Happy New Year'  date=' 01-Jan-2022'/>
        <Greeting name='SongKarn Festival' date=' 03-Apr-2022'/>
    </View>
  )
}

export default LotsOfGreetings

