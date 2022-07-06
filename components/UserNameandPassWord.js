import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React,{useState} from 'react'

const UserNameandPassWord = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const showData = () => {
        alert('Email: '+email+'\nPassword: '+pass)
      }
  return (
    <View style={{flex:5,marginTop:20}}>
      <TextInput
        value={email}
        onChangeText={(email)=>{setEmail(email)}}
        style={styles.textinput}
        placeholder='Email'
      />
      <TextInput
        value={pass}
        onChangeText={(pass)=>{setPass(pass)}}
        style={styles.textinput}
        placeholder='Password'
      />
      <Button
        color='#FFDEAD'
        title='Submit'
        onPress={showData}
      />
    </View>
  )
}

export default UserNameandPassWord

const styles = StyleSheet.create({
    textinput:{
        width:250,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#FFFFE0'
    }
   
})