import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import PostForm from '../components/PostForm'
import {Context} from '../context/DiaryContext'

const EditScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const {state, editDiaryPost} = useContext(Context)
  const post = state.find(
    (diaryPost) => diaryPost.id === navigation.getParam('id')
  )

  return (
    <PostForm
      inititalValues={{title: post.title, movieDescription: post.movieDescription, movieThoughts: post.movieThoughts, rating: post.rating}}
      onSubmit={(title, movieDescription, movieThoughts, raiting) => {
        editDiaryPost(id, title, movieDescription, movieThoughts, raiting, () =>
          navigation.navigate('View', {id: id})
        )
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
