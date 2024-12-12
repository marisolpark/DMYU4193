import React, {useContext} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Context} from '../context/DiaryContext'
import { StarRatingDisplay } from '../components/StarRating'
import Entypo from '@expo/vector-icons/Entypo';

const ViewScreen = ({navigation}) => {
  const {state} = useContext(Context)

  const post = state.find(
    (diaryPost) => diaryPost.id === navigation.getParam('id')
  )

  return (
    <View style={styles.backgroundContainer}>
      <Text style={[styles.textColor, styles.title]}>{post.title}</Text>
      <StarRatingDisplay rating={post.rating}/>
      <View>
        <Text style={[styles.textColor,styles.bodyLabel]}>Description</Text>
        <Text style={[styles.textColor,styles.bodyText]}>{post.movieDescription}</Text>
      </View>
      <View>
        <Text style={[styles.textColor,styles.bodyLabel]}>Opinion</Text>
        <Text style={[styles.textColor,styles.bodyText]}>{post.movieThoughts}</Text>
      </View>
    </View>
  )
}

ViewScreen.navigationOptions = ({navigation}) => {
  const id = navigation.getParam('id')
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: id})}>
        <Entypo style={styles.editIcon} name="edit" size={30} color="white" />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "black",
    flex: 1,
    padding: 20,
    gap: 10,
  },
  editIcon: {
    marginRight: 10,
  },
  textColor: {
    color: "white",
  },
  title: {
    fontSize: 30,
  },
  bodyLabel: {
    fontSize:16,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 16,
  },
})

export default ViewScreen
