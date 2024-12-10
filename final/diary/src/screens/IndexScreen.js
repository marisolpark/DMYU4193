import React, {useContext, useEffect} from 'react'
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import {Context} from '../context/DiaryContext'
import { StarRatingDisplay } from '../components/StarRating'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const IndexScreen = ({navigation}) => {
  const {state, deleteDiaryPost, getDiaryPosts, getDiaryPostFilter} = useContext(Context)

  //useState that saves and updates the selected filter based on the selected button
  // const [filter, setFilter] = useState("none")

  //filter options for all the different filter buttons
  const filterOptions = [
    {lable: 'All', value: "none"},
    {lable: '5 Start', value: 5},
    {lable: '4 Start', value: 4},
    {lable: '3 Start', value: 3},
    {lable: '2 Start', value: 2},
    {lable: '1 Start', value: 1},
    {lable: '0 Start', value: 0},
  ]

  useEffect(() => {
    getDiaryPosts()
    const listener = navigation.addListener('didFocus', () => {
      // getDiaryPostFilter(filter)
      getDiaryPosts()
    })
    return () => {
      listener.remove()
    }
  }, [])

  //helper function that calls for setFilter() and getDiaryPostFinter based on the selected filter button
  // const handleFilterClick = (filterValue) => {
  //   // setFilter(filterValue)
  //   getDiaryPostFilter(filterValue)
  // }

  return (
    <View>
      <Text style={styles.title}>Your Movie Reviews</Text>

    {/* prints out the different button filter options based on the objects in filterOptions */}
      {filterOptions.map((filterOption, index) => (
        // the onPress event defined in each button calls for getDiaryPostFilter for the specific selected 
        // button which prints out the posts that have a matching rating.
        <TouchableOpacity key={index} onPress={() => getDiaryPostFilter(filterOption.value)}>
          <Text>{filterOption.lable}</Text>
        </TouchableOpacity>
      ))}

      <FlatList
        data={state}
        keyExtractor={(post) => post.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('View', {id: item.id})}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              {/* instance of the StarRatingDisplay component that I made which only displays the number of 
              starts that a movie posts has. This is a custom component that can be found in the components folder */}
              <StarRatingDisplay rating={item.rating}/>
              <TouchableOpacity onPress={() => deleteDiaryPost(item.id)}>
                <MaterialIcons name="delete" size={24} color="#333" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <MaterialIcons
          style={styles.addIcon}
          name="add"
          size={30}
          color="#666"
        />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#666',
  },
  title: {
    fontSize: 18,
  },
  addIcon: {
    marginRight: 10,
  },
})

export default IndexScreen
