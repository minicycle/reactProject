import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React,{useState} from 'react'

const UserNameandPassWord = () => {
    const [textInputName,settextInputName] = useState('');
    const [email,setemail] = useState('');
    
    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!textInputName.trim()) {
            alert('Please Enter Name');
            return;
        }
    //Check for the Email TextInput
    if (!email.trim()) {
        alert('Please Enter Email');
        return;
    }
    //Checked Successfully
    alert('Success')
    //Do whatever you want  

    }
  return (
    <View style={{flex:1,marginTop:20}}>
      <TextInput
        value={textInputName}
       onChangeText={(textInputName)=>{settextInputName(textInputName)}}
        style={styles.textinput}
        placeholder='Enter Name'
      />
      <TextInput
        value={email}
       onChangeText={(email)=>{setemail(email)}}
        style={styles.textinput}
        placeholder='Enter Email'
      />
      <Button
        color='#FFDEAD'
        title='Submit'
        onPress={checkTextInput}
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