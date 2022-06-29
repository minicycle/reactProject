import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import stySheet from './components/stySheet';
import TextInputExample from './components/TextInputExample';
import Cat from './components/Cat';
import Cafe from './components/Cafe';

const App = () => {

  const showData = () => {
    alert("Hello Button")
  }

  return (
    <View>
      <Text>React Native</Text>
      <Logo/>
      <Button
        onPress={showData}
        title='Click Me'
      />
      {/* <TextInputExample/> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
    </View>
  )
}

export default App


