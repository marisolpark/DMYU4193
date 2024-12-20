import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import DiaryContext from '../context/DiaryContext'

const CreateScreen = ({navigation}) => {
    const {addDiaryPost} = useContext(DiaryContext)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const id = navigation.getParam('id')

  return (
    <View>
      <Text style={styles.lable}>Create title: </Text>
      <TextInput 
        autoCapitalize='words'
        autoCorrect={false} 
        style={styles.input} 
        value={title} 
        onChangeText={(text) => setTitle(text)}
    />

      <Text style={styles.lable}>Create content: </Text>
      <TextInput 
        autoCorrect={false} 
        style={styles.input} 
        value={content} 
        onChangeText={(text) => setContent(text)}
        />
        <Button title='Save Post' onPress={() => addDiaryPost(title, content, ()=> navigation.navigate('Index'))} />
    </View>
  )
}

const styles = StyleSheet.create({
    lable: {
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
    }
})
export default CreateScreen