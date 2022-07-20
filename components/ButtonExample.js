import { StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView 
} from 'react-native'
import React from 'react'
const Separator= () => (
    <View style={styles.separator}/>
)
const ButtonExample = () => {
  return (
   <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>
            The title and onPress handler are required.It is recommended to set
            accessigilityLabel to thelp make your app usable by everyone.
            </Text>
            <Button
                title='press me'
                onPress={()=>alert('Simple Button pressed')}
            />
        </View>
        <Separator/>
        <View>
            <Text style={styles.title}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 150s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            
            </Text>
            <Button
                title='press me'
                onPress={()=>alert('Pink Button pressed')}
                color='pink'
            />
        </View>
        <Separator/>
        <Separator/>
        <View>
            <Text style={styles.title}>
            Lorem Ipsum is simply dummy text of the printing.  
            </Text>
            <Button
                title='press me'
                disabled
            />
        </View>
        <View >
            <Text style={styles.title}>
            Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum has been the industry's standard dummy text ever since the 150s,  
            </Text>
            <View style={styles.fixToText}>
            <Button
                title='Left Button'
                onPress={()=>alert('Left Button pressed')}
            />
            <Button 
                title='Right Button'
                onPress={()=>alert('Right Button pressed')}
            />
            </View>
        </View>
       
   </SafeAreaView>
  )
}

export default ButtonExample

const styles = StyleSheet.create({
     container: {
     flex: 1,
     justifyContent: 'center',
     marginHorizontal: 16,
     },
     title: {
     textAlign: 'center',
     marginVertical: 8,
     },
     fixToText: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     },
     separator: {
     marginVertical: 8,
     borderBottomColor: '#737373',
     borderBottomWidth: StyleSheet.hairlineWidth,
     },
});