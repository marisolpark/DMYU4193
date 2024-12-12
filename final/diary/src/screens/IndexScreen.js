import React, {useContext, useEffect, useState} from 'react'
import {StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native'
import {Context} from '../context/DiaryContext'
import { StarRatingDisplay } from '../components/StarRating'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const IndexScreen = ({navigation}) => {
  const {state, deleteDiaryPost, getDiaryPosts} = useContext(Context)
  //useState that saves and updates the selected filter based on the selected button
  const [filter, setFilter] = useState("none")
  //useState that saves and updates the posts filtered by rating based on the selected button
  const [filterResults, setFilterResults] = useState(state)

  //filter options for all the different filter buttons
  const filterOptions = [
    {lable: 'All', value: "none"},
    {lable: <><Text>5 </Text><FontAwesome name="star" size={18} color="white"/></>, value: 5},
    {lable: <><Text>4 </Text><FontAwesome name="star" size={18} color="white"/></>, value: 4},
    {lable: <><Text>3 </Text><FontAwesome name="star" size={18} color="white"/></>, value: 3},
    {lable: <><Text>2 </Text><FontAwesome name="star" size={18} color="white"/></>, value: 2},
    {lable: <><Text>1 </Text><FontAwesome name="star" size={18} color="white"/></>, value: 1},
    {lable: <><Text>0 </Text><FontAwesome name="star" size={18} color="white"/></>, value: 0},
  ]

  useEffect(() => {
    getDiaryPosts()
    const listener = navigation.addListener('didFocus', () => {getDiaryPosts()})
    return () => {listener.remove()}
  }, [])

  useEffect(() => {setFilterResults(state)}, [state]);

  //helper function that filters thorough the movie posts to get the ones matching with the selected rating button
  const handleRatingFilterClick = (filterValue) => {
    setFilter(filterValue)
    if (filterValue == "none") {
      setFilterResults(state)
    } else {
      const ratingPosts = state.filter((movie) => movie.rating === filterValue)
      setFilterResults(ratingPosts)
    }
  }

  return (
    <View style={styles.backgroundContainer}>
    {/* prints out the different button filter options based on the objects in filterOptions */}
    <View style={styles.filtersContainer}>
      {filterOptions.map((filterOption, index) => (
          // the onPress event defined in each button calls for handleRatingFilterClick function to get the 
          // specific selected button which prints out the posts that have a matching rating.
          <TouchableOpacity key={index} 
          onPress={() => handleRatingFilterClick(filterOption.value)} 
          style={[styles.buttonGeneral, filter === filterOption.value ? styles.buttonPress : styles.buttonNoPress]}>
            <Text style={filter === filterOption.value ? styles.buttonTextPressed : styles.buttonTextNopress}>{filterOption.lable}</Text>
          </TouchableOpacity>
        ))}
    </View>
      
      <FlatList
        data={filterResults}
        keyExtractor={(post) => post.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('View', {id: item.id})}
          >
            <View style={styles.postRow}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                {/* instance of the StarRatingDisplay component that I made which only displays the number of 
                starts that a movie posts has. This is a custom component that can be found in the components folder */}
                <StarRatingDisplay rating={item.rating}/>
              </View>
              <TouchableOpacity onPress={() => deleteDiaryPost(item.id)}>
                <MaterialIcons name="delete" size={40} color="#333" />
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
  backgroundContainer: {
    backgroundColor: "#0F0F0F",
    flex: 1,
    padding: 20,
  },
  addIcon: {
    marginRight: 10,
  },
  filtersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  buttonGeneral: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  buttonTextNopress: {
    color: "white"
  },
  buttonTextPressed: {
    color: "black"
  },
  buttonNoPress: {
    backgroundColor: "#2F2F2F",
  },
  buttonPress: {
    backgroundColor: "#FFCC01",
  },
  postRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#303030',
  },
  title: {
    fontSize: 25,
    color: "white",
    marginBottom: 5,
  },
})

export default IndexScreen