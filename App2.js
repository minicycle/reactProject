import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: { backgroundColor: 'pink' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 30 },
        }}
      >
        <Stack.Screen name="First Page" component={FirstPage} />
        <Stack.Screen name="Second Page" component={SecondPage} />
        <Stack.Screen name="Third Page" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
