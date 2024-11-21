import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import ImageCard from '../components/ImageCard'
import { FlatList } from 'react-native-gesture-handler'

const ImageScreen = () => {
    const chickens = [
        {name: 'Bilbo Baggins', src: require('../../assets/bilbo-baggins.png')},
        {name: 'Cameron Poe', src: require('../../assets/cameron-poe.png')},
        {name: 'Pollux Troy', src: require('../../assets/pollux-troy.png')},
        {name: 'Nikki Cage', src: require('../../assets/nikki-cage.png')}
    ]
  return (
    <View>
      <Text>Image Screen</Text>
      {/* <ImageCard name='Bilbo Baggins' src={require('../../assets/bilbo-baggins.png')}/> */}
      <FlatList 
      alwaysBounceVertical
        keyExtractor={(chicken) => chicken.name}
        data={chickens}
        renderItem={({item}) => {
          console.log(item.name)
          console.log(item.src)
          return <ImageCard name={item.name} src={item.src} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
export default ImageScreen