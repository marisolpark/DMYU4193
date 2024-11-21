import { useEffect, useState } from "react"
import yelp from "../api/yelp"

export default () =>  {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
  
    const searchApi = async (searchTerm) => {
      try{
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'Brooklyn',
          },
        })
        setResults(response.data.buisnesses)
        setErrorMessage('')
      } catch(error) {
        setErrorMessage('Something went wrong. Check your data connection')
      }
    }
  
    useEffect(() => {
        searchApi('sushi')
    }, [])

    return [searchApi, results, errorMessage]
}