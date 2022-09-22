import { View, Text, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native'
import Loginstyles from '../styles/LoginStyles'
import React from 'react'

const LoginScreen = ({navigation}) => {
   
    const [text, onChangeText] = React.useState();
    const [password, onChangePassword] = React.useState()

  return (
    <SafeAreaView>
      <TextInput
        style = {Loginstyles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="email here"
      />
      <TextInput
        style = {Loginstyles.input}
        secureTextEntry={true}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
      />
      <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
        <Text>Login</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default LoginScreen