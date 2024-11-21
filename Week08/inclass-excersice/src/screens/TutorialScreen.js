import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TutorialScreen = () => {
  return (
    <View>
      <Text style={styles.blueText}>Tutorial Screen</Text>
      {/* you can do in line styling, however this will not validate the styling and therefore you will 
      not get a message about what part of the styling is failing */}
      <Text>Tutorial Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    blueText: {
        color: '#006fff',
        fontSize: 36,
    },
})

export default TutorialScreen