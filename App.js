import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import stySheet from './components/stySheet';

const App = () => {
  return (
    <View style ={stySheet.container}>
      <Text style ={stySheet.title}>React Native</Text>
      {/* <Logo/> */}
    </View>
  )
}

export default App


