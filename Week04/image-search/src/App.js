// import SearchImages from "./api"
import { useState } from "react"
import SearchBar from "./components/SearchBar"
import searchImages from './api'
import ImageList from "./components/ImageList"

const App = () => {
  // const images = SearchImages()
  // console.log(images)

  // we want our imgs here an not in the search bad or another child components,
  //  is bc this is where we want to trigger the re-render
  const[images, setImages] = useState([])

  const handleSubmit = async (term) => {
    console.log('do a search with: ', term)
    const result = await searchImages(term)
    console.log(result)
    setImages(result)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  )
}

export default App

