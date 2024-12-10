import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import PostForm from '../components/PostForm'
import {Context} from '../context/DiaryContext'

const CreateScreen = ({navigation}) => {
  const {addDiaryPost} = useContext(Context)

  return (
    // added movieThoughts and rating so they are passed to the addDiaryPost and passed to the database to be saved
    <PostForm
      onSubmit={(title, movieDescription, movieThoughts, rating) => {
        addDiaryPost(title, movieDescription, movieThoughts, rating, () => navigation.navigate('Index'))
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default CreateScreen
