import axios from "axios"

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        // insde header use the ACCESS KEY
        headers: {
            Authorization: 'Client-ID Qwt3urjPwU01IJ4cIHtwjVgNlcbiq2-OO51Np5yz10E',
        }, 
        params: {query: term},
      })
      console.log(response.data.results)
      return response.data.results
}

export default searchImages

