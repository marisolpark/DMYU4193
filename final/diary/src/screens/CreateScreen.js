import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import {Context} from '../context/DiaryContext'
import PostForm from '../components/PostForm'

const CreateScreen = ({navigation}) => {
  const {addDiaryPost} = useContext(Context)

  return (
    <PostForm
      onSubmit={(title, movieDescription, movieThoughts, rating) => {
        addDiaryPost(title, movieDescription, movieThoughts, rating, () => navigation.navigate('Index'))
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default CreateScreen
