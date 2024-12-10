import React, {useState} from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
import StarRating from '../components/StarRating'

const PostForm = ({onSubmit, inititalValues = {title: '', movieDescription: '', movieThoughts:'', rating:0}}) => {
  const [title, setTitle] = useState(inititalValues.title)
  const [movieDescription, setMovieDescription] = useState(inititalValues.movieDescription)
  //added these 2 useStates to keep track and edit the value for the 2 new fields
  const [movieThoughts, setMovieThoughts] = useState(inititalValues.movieThoughts)
  const [rating, setRating] = useState(inititalValues.rating)

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Movie description:</Text>
      {/* slightly edited this so it could be a textArea instead of a sigle line input */}
      <TextInput
        autoCapitalize="sentences"
        autoCorrect={false}
        multiline={true}
        style={styles.input}
        value={movieDescription}
        onChangeText={(text) => setMovieDescription(text)}
      />
      {/* added and new multi-line input field which allows users do write down their thoughts on the movie*/}
      <Text style={styles.label}>Your thoughts on the movie:</Text>
      <TextInput
        autoCapitalize="sentences"
        autoCorrect={false}
        multiline={true}
        style={styles.input}
        value={movieThoughts}
        onChangeText={(text) => setMovieThoughts(text)}
      />
      {/* added a new field that allows the user to add a star rating to a movie by just clicking on the star 
      they want, no need for extra buttons. This is a custom component that can be found in the components folder */}
      <StarRating rating={rating} setRating={setRating}/>
      <Button
        title="Save Post"
        onPress={() => {
          onSubmit(title, movieDescription, movieThoughts, rating)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    margin: 10,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#666',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
})

export default PostForm
