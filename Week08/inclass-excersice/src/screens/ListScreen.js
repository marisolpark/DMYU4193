import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const ListScreen = () => {

    const chickens = [ // this is the base data for the list, we should not be changing it
        {name: 'Silky Johnson'},
        {name: 'Bilbo Baggins'},
        {name: 'Castor Troy'},
        {name: 'Pollux Troy'},
        {name: 'Sean Archer'},
        {name: 'Cameron Poe'},
        {name: 'Nikki Cage'},
      ]

  return (
    <View>
      <Text style={styles.title}>List Screen</Text>
      {/* {chickens.map((chicken) => (<Text>{chicken.name}</Text>))}  */}
      {/* this implementation should still work but there is a better way to do this inr eact native */}

      {/* <Text>{chicken.name}</Text> */}
      <FlatList
      horizontal //   horizontal is a boolean which is true by default --> this makes it possible to scroll horozontally
      showsHorizontalScrollIndicator = {false} // you tell it to hide the horizontal scrollbar

      data={chickens}
      renderItem={({item}) => { return <Text style={styles.itemStyle}>{item.name}</Text>}} // renderItem is the render function
      />

    </View>
  )
}

const styles = StyleSheet.create({
    itemStyle: {
        marginVertical: 60,
        marginHorizontal: 10,
        fontSize: 24,

    },
    title: {
        fontSize: 60,
        color: 'red',
    },
})

export default ListScreen