import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, Image, FlatList} from 'react-native'

import yelp from '../api/yelp'

const DetailScreen = (props) => {
  const {navigation} = props
  const id = navigation.getParam('id')

  const [result, setResult] = useState(null)

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      console.log('Response Data:', response.data);
      setResult(response.data);
    } catch (err) {
      console.log('ERROR', err);
    }
  };

  useEffect(() => {
    getResult(id)
  }, [])

  return (
    <View>
      <Text>{result && result.name}</Text>
      <Image source={{uri: result && result.image_url}} style={styles.img}/>
      <Text>Star Rating: {result && result.rating}</Text>
      <Text>Price Range: {result && result.price}</Text>
      <Text>Address: {result && result.location.display_address[0]} {result && result.location.display_address[1]} </Text>
      <Text>Images:</Text>
      <FlatList 
        horizontal
        data={result && (result.photos || [])}
        keyExtractor={(photo) => photo}
        renderItem={({item})=>{
          return <Image source={{ uri: item && item }} style={styles.img}/>
        }}
        />
        {/* most places do not seem to have any URLs in their "photos" array so a lot of them do not have picture */}
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
})

export default DetailScreen