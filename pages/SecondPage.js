import { View, Text, StyleSheet,Button } from 'react-native'
import React from 'react'
import { styles } from '../components/styles'
const SecondPage = ({ navigation }) => {
   
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textTopStyle}>This is a Second Page</Text>

        <Button
          title="Go to First Page"
          onPress={() =>
            navigation.navigate('First Page', {
        
            })
          }
        />
        <Button
          title="Go to Third Page"
          onPress={() =>
            navigation.navigate('Third Page', {
             
            })
          }
        />
        <View style={{bottom:'-40%'}}>
        <Text style={styles.textBottomSytel}>
          Thai-Nichi Institute of Technology
        </Text>
        </View>
      </View>
    </View>
  )
}

export default SecondPage


