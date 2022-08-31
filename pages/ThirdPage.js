import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { styles } from '../components/styles'
const ThirdPage = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textTopStyle}>This is a Third Page</Text>

        <Button
          title="Go to First Page"
          onPress={() => navigation.navigate('First Page', {})}
        />
        <Button
          title="Go to Second Page"
          onPress={() => navigation.navigate('Second Page', {})}
        />
        <View style={{ bottom: '-40%' }}>
          <Text style={styles.textBottomSytel}>
            Thai-Nichi Institute of Technology
          </Text>
        </View>
      </View>
    </View>
  )
}

export default ThirdPage
