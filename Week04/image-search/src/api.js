import axios from "axios"

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        // insde header use the ACCESS KEY
        headers: {
            Authorization: 'Client-ID ',
        }, 
        params: {query: term},
      })
      console.log(response.data.results)
      return response.data.results
}

export default searchImages

