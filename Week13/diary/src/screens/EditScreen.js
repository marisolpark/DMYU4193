import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import PostForm from '../components/PostForm'
import Context from '../context/DiaryContext'

const EditScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const {state, editDiaryPost} = useContext(Context)
  const post = state.find(
    (diaryPost) => diaryPost.id === navigation.getParam('id')
  )

  // const [title, setTitle] = useState(post.title)
  // const [content, setContent] = useState(post.content)

  return (
    <PostForm 
      initialValues={{title:post.title, content:post.content}}
      onSubmit={(title, content) => { // we have to extract this info from the post form by wrapping the onsubmit with it
        editDiaryPost(id, title, content, () => 
        navigation.navigate('View', {id: id}))
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
    //       editDiaryPost(id, title, content, () =>
    //         navigation.navigate('View', {id: id})
    //       )
    //     }}
    //   />
    // </View>
  )
}

const styles = StyleSheet.create({
})

export default EditScreen
