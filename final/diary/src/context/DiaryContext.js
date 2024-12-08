import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const postReducer = (state, action) => {
  switch (action.type) {
    case 'get_posts': 
      return action.payload
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

const addDiaryPost = (dispatch) => {
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

export const {Context, Provider} = createDataContext(
  postReducer,
  {
    getDiaryPosts,
    addDiaryPost,
    deleteDiaryPost,
    editDiaryPost,
  },
  []
)
