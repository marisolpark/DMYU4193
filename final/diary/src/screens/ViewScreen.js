import React, {useContext} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import {Context} from '../context/DiaryContext'
import { StarRatingDisplay } from '../components/StarRating'

const ViewScreen = ({navigation}) => {
  const {state} = useContext(Context)

  const post = state.find(
    (diaryPost) => diaryPost.id === navigation.getParam('id')
  )

  return (
    <View>
      <Text>
        {post.title} - {post.id}
      </Text>
      <Text>{post.movieDescription}</Text>
      {/* added the moviethoughts */}
      <Text>{post.movieThoughts}</Text>
      {/* added another instance of the  StarRatingDisplay component*/}
      <StarRatingDisplay rating={post.rating}/>
    </View>
  )
}

ViewScreen.navigationOptions = ({navigation}) => {
  const id = navigation.getParam('id')
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: id})}>
        <FontAwesome
          style={styles.editIcon}
          name="pencil"
          size={30}
          color="#666"
        />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  editIcon: {
    marginRight: 10,
  },
})

export default ViewScreen
