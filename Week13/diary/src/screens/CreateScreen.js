import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import PostForm from '../components/PostForm'
import Context from '../context/DiaryContext'

const CreateScreen = ({navigation}) => {
  const {addDiaryPost} = useContext(Context)
  // const id = navigation.getParam('id')
  return (
    <PostForm 
      onSubmit={(title, content) => {
        addDiaryPost(title, content, () => navigation.navigate('Index'))
      }}/>
    // <View>
    //   <Text style={styles.label}>Title:</Text>
    //   <TextInput
    //     autoCapitalize="words"
    //     autoCorrect={false} 
    //     style={styles.input}
    //     value={title}
    //     onChangeText={(text) => setTitle(text)}
    //   />
    //   <Text style={styles.label}>Content:</Text>
    //   <TextInput
    //     autoCorrect={false}
    //     style={styles.input}
    //     value={content}
    //     onChangeText={(text) => setContent(text)}
    //   />
    //   <Button
    //     title="Save Post"
    //     onPress={() => {
    //       addDiaryPost(title, content, () => navigation.navigate('Index'))
    //     }}
    //   />
    // </View>
  )
}

const style = StyleSheet.create({})
// const styles = StyleSheet.create({
//   label: {
//     fontSize: 20,
//     margin: 10,
//     marginBottom: 5,
//   },
//   input: {
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#666',
//     marginHorizontal: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//   },
// })

export default CreateScreen
