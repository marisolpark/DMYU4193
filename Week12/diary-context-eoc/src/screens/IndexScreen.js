import React, {useContext} from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native'
import DiaryContext from '../context/DiaryContext'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const IndexScreen = ({navigation, }) => {
  const {state, addDiaryPost, deleteDiaryPost} = useContext(DiaryContext)
  return (
    <View>
      {/* <Button title="Add Post" onPress={addDiaryPost} /> */}
      <FlatList
        data={state}
        keyExtractor={(post) => post.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('View', {id: item.id})}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteDiaryPost(item.id)}>
                <MaterialIcons name="delete" size={24} color="#333"/>
              </TouchableOpacity>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <MaterialIcons name="add" style={styles.addIcon} size={30} color="#666" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#666',
  },
  title: {
    fontSize: 18,
  },
  addIcon: {
    marginRight: 10,
  },
})

export default IndexScreen
