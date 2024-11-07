import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const ColorScreen = () => {

    const [colors, setColors] = useState([])
    // console.log(colors)

  return (
    <View>
      <Text>Color Screen</Text>
      <Button title='Add a New Color' 
        onPress={() => {setColors([...colors, randomRGB()])
        }}/>
        {/* <View style={{ height:100, width:'100%', backgroundColor:randomRGB()}}/> */}
        {/* this is an example of how we want out swatch to render */}
        {/* we can use View as a div */}

        <FlatList 
            data={colors}
            keyExtractor={(color) => color}
            renderItem={({item}) => {
                return (
                    <View style={{ height:100, width:'100%', backgroundColor:item}}/>
                )
            }}

        />
    </View>
  )
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({})
export default ColorScreen