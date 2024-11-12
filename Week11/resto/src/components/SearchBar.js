import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SearchBar = (props) => {
  // this is destructuring the props that we are recieving
  const {term, onTermChange, onTermSubmit} = props
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" size={33} color="#111" />
      < TextInput 
        style={styles.inputStyle} 
        autoCapitalize='none' 
        autoCorrect={false}
        //  are the evnt listerners already existing ones or are we creating their names too?
        onChangeText={onTermChange}
        // onChangeText={(newTerm) => onTermChange(newTerm)} --> if we were taking it slow
        // it is a built-in listener
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 5,
    height:50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },

  inputStyle: {
    marginLeft: 10,
    fontSize: 16,
    height: 30,
    backgroundColor: '#eee',
    flex: 1,
    padding: 5,
    borderRadius: 5,

  }
})