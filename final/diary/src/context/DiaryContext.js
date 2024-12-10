import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const postReducer = (state, action) => {
  switch (action.type) {
    case 'get_posts': 
      return action.payload
    // case 'get_filter':
    //   return action.payload
    case 'delete_post':
      return state.filter((post) => post.id !== action.payload)
    case 'edit_post':
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post
      })
    default:
      return state
  }
}

const getDiaryPosts = (dispatch) => {
  return async() => {
    try {
      const response = await jsonServer.get('posts')
      dispatch({type: 'get_posts', payload: response.data})
    } catch (err) {
      console.log("ERROR: feiled at getting posts")
    }

  }
}

//this helper function calls for all of the posts and filters thought them. 
//It only returns the results that have a rating matching to to the value it recieves from the Index.js file button
const getDiaryPostFilter = (dispatch) => {
  return async (value) => {
    try {
      const posts = await jsonServer.get('posts')
      const response = value == "none" ? posts.data : posts.data.filter((post) => post.rating === value)
      dispatch({type: 'get_posts', payload: response})
    } catch (err) {
      console.log("ERROR: feiled at getting filtered posts")
    }
  }
}

//added movieThoughts and rating as one of the recieved values so that they could be added to our database
const addDiaryPost = () => {
  return async (title, movieDescription, movieThoughts, rating, callback) => {
    try {
      const response = await jsonServer.post('/posts', {title, movieDescription, movieThoughts, rating})
      if (callback) {callback()}
    } catch (err) {
      console.log("ERROR: feiled at adding new post")
    }
  }
}

const deleteDiaryPost = (dispatch) => {
  return async (id) => {
    try {
      const response = await jsonServer.delete(`/posts/${id}`)
      dispatch({type: 'delete_post', payload: id})
    } catch (err) {
      console.log("ERROR: feiled at deleting post")
    }
  }
}

//added movieThoughts and rating as one of the recieved values so that they could be added to our database
const editDiaryPost = (dispatch) => {
  return async (id, title, movieDescription, movieThoughts, rating, callback) => {
    try {
      await jsonServer.put(`/posts/${id}`, {title, movieDescription, movieThoughts, rating})
      dispatch({type: 'edit_post', payload: {id, title, movieDescription, movieThoughts, rating}})
      if (callback) {
        callback()
      }
    } catch (err) {
      console.log("ERROR: feiled at editing post")
    }
  }
}

//added the new helper function getDiaryPostFilter-
export const {Context, Provider} = createDataContext(
  postReducer,
  {
    getDiaryPosts,
    addDiaryPost,
    deleteDiaryPost,
    editDiaryPost,
    getDiaryPostFilter,
  },
  []
)
