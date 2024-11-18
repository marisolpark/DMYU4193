import React, {useState, useEffect, Image, FlatList} from 'react'
import {StyleSheet, Text, View} from 'react-native'

import yelp from '../api/yelp'

const DetailScreen = (props) => {
  const {navigation} = props
  const id = navigation.getParam('id')

  const [result, setResult] = useState(null)

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`)

      setResult(response.data)
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  // use effect with empty [] second argumement to avoid loop, and only call once on mount
  useEffect(() => {
    getResult(id)
  }, [])

  return (
    <View>
      {/* <Text>Detail Screen</Text> */}
      <Text>{result && result.name}</Text>
      <Text>Star Rating: {result && result.rating}</Text>
      <Text>Price Range: {result && result.price}</Text>
      <Text>Address: {result && result.location.display_address[0]} {result && result.location.display_address[1]} </Text>
      <Text>Images:</Text>
      {/* <Image source={{uri: 'https://s3-media2.fl.yelpcdn.com/bphoto/1aoNc-cMmBY-BNcflaaHpA/o.jpg'}} /> */}
      {/* <FlatList
          horizontal 
          data={result}
          renderItem={({item}) => {
            return <Image source={{uri: item.image_url}} />
          }}/> */}

      {/* <Text>ID: {id}</Text> */}
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})
