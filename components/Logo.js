import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {

  const textLogo = "Thai-Nichi"; 
  const isTH = true;
  
  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
      <Text>{textLogo}</Text>
      {
        // isTH && <Text>ภาษาไทย</Text>
      }
      {/* {use if/else or conditinal} */}
      {
        isTH
        ?(<Text>ภาษาไทย</Text>)
        :(<Text>English</Text>)
      }
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    TextLogo:{
        color:"yellow",
        fontSize:60
    }
})