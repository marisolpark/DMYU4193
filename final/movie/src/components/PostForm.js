import React, {useState} from 'react'
import {TouchableOpacity, StyleSheet, Text, TextInput, View, Button} from 'react-native'
import StarRating from '../components/StarRating'

const PostForm = ({onSubmit, inititalValues = {title: '', movieDescription: '', movieThoughts:'', rating:0}}) => {
  const [title, setTitle] = useState(inititalValues.title)
  const [movieDescription, setMovieDescription] = useState(inititalValues.movieDescription)
  const [movieThoughts, setMovieThoughts] = useState(inititalValues.movieThoughts)
  const [rating, setRating] = useState(inititalValues.rating)

  return (
    <View style={styles.backgroundContainer}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        autoCapitalize="sentences"
        autoCorrect={false}
        multiline={true}
        style={styles.input}
        value={movieDescription}
        onChangeText={(text) => setMovieDescription(text)}
      />
      <Text style={styles.label}>Thoughts</Text>
      <TextInput
        autoCapitalize="sentences"
        autoCorrect={false}
        multiline={true}
        style={styles.input}
        value={movieThoughts}
        onChangeText={(text) => setMovieThoughts(text)}
      />
  
      <StarRating rating={rating} setRating={setRating}/>

      <TouchableOpacity style={styles.button} onPress={() => { onSubmit(title, movieDescription, movieThoughts, rating) }}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "black",
    flex: 1,
    gap: 12,
    padding: 20,
  },
  label: {
    fontSize: 20,
    color: "white",
    margin: 10,
    marginBottom: 0,
  },
  input: {
    fontSize: 18,
    color: "white",
    borderColor: '#6C6C6C',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 4,
    padding: 5,
  },
  button: {
    backgroundColor: '#f5ba00',
    alignItems: 'center',
    maxWidth:200,
    borderRadius: 25,
    marginTop: 10,
    padding: 15,
  }
})

export default PostForm
