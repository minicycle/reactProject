import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import User from './components/User'
import Logo from './components/Logo'

const App = () => {
  return (
    <View>
      <Logo/>
      <Button
      title='Click Me'
      />
      <User/>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})