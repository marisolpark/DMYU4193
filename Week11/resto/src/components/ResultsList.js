import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const resultsList = (props) => {
  const {title, results} = props
  return (
    <View>
      <Text>{title}</Text>
      <FlatList 
        horizontal
        data={results}
        keyExtractor={(result) => {
          return result.id
        }}
        renderItem={() => {}}
      />

    </View>
  )
}

export default resultsList

const styles = StyleSheet.create({})