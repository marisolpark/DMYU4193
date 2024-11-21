import React from "react"
import { View, Text, StyleSheet } from "react-native"
//text is a react primitive component (components that we didn't make) --> when you have text in react native 
//then you must always have text inside the react tab. You cant even out a semicolor

//stylesheet has some methocs in it, one of them is to create a stylesheet

// View is basically the react native equivalent of a fragment <></> in react

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello mobile</Text>
      <Text style={styles.text}>Hi everyone!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    //there are no units here but it is in pixels
    fontSize: 30,
    color: 'red',
  },
});

export default HomeScreen
