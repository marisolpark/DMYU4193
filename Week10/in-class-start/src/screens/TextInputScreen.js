import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'

const TextInputScreen = () => {
    const [password, setpassword] = useState('')

  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize='none' 
        autoCorrect={false} 
        value={password} 
        onChangeText={(newValue) => setpassword(newValue)}/>
        {password.length < 5 && password.length != 0 ? <Text style={styles.error}>Password must be at least 5 characters long</Text> : null} 
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    },

    error: {
        fontSize: 12,
        color: 'red',
        marginHorizontal: 15,
    },
})
export default TextInputScreen