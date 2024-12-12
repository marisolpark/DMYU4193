import React, {useContext, useEffect, useState} from 'react'
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import {Context} from '../context/DiaryContext'
import { StarRatingDisplay } from '../components/StarRating'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome'

const IndexScreen = ({navigation}) => {
  const {state, deleteDiaryPost, getDiaryPosts} = useContext(Context)
  const [filter, setFilter] = useState("none")
  const [filterResults, setFilterResults] = useState(state)

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
    <View style={styles.filtersContainer}>
      {filterOptions.map((filterOption, index) => (
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
                <StarRatingDisplay rating={item.rating}/>
              </View>
              <TouchableOpacity onPress={() => deleteDiaryPost(item.id)}>
                <FontAwesome style={styles.addIcon} name="trash-o" size={30} color="#666" />
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
        <AntDesign name="plus" size={30} color="#f5ba00" />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "black",
    flex: 1,
    padding: 20,
  },
  addIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    color: "white",
    marginBottom: 5,
  },
  filtersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  postRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#303030',
    marginBottom: 5,
    padding: 20,
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
})

export default IndexScreen