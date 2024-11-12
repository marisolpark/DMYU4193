import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: term,
        location: 'NYC',
      },
    })
    setResults(response.data.buisnesses)
  }
  return (
    <View>
      {/* <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm) }/> */}
      {/* here you are not calling a function so () are not needed. However, in this case we do not need to be there is no other thing in the event handler */}
      {/* ASK!!! - why do we not need the () */}
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi}/>
      <Text>We found {results.length} results: </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
