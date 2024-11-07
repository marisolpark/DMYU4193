import React from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'

const HomeScreen = (props) => {
  console.log(props)

  // const handlePress = () => {
  //   //do stuff here
  // }

  return (
    <View>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Button title='Go to Tutorial Screen' 
        onPress={() => props.navigation.navigate('Tutorial')}/>
      <Button title='Go to List Screen' 
        onPress={() => props.navigation.navigate('Lists')}/>
      <Button title='Go to Image Screen' 
        onPress={() => props.navigation.navigate('Images')}/>
        <Button title='Go to Color Screen' 
        onPress={() => props.navigation.navigate('Colors')}/>
        
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('Lists')}>
        <Text>Go to List Screen</Text>
      </TouchableOpacity> */}
      {/* with touchable opacity we can do put any jsx we want */}
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'red',
  },
})

export default HomeScreen
