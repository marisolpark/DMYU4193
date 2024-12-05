import React, {createContext, useReducer} from 'react'
import createDataContext from './createDataContext'

// const DiaryContext = createContext()

// our reducer here is unique to diaryCotext
const postReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 10000),
          title: action.payload.title,
          content: action.payload.content,
        },
      ]
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

// export const DiaryProvider = ({children}) => {
//   const [state, dispatch] = useReducer(postReducer, [
//     {
//       id: 123,
//       title: 'fake post 1',
//       content: 'here is some content we dont have to type every time',
//     },
//   ])

// action helpers, now bound with dispatch
  // const addDiaryPost = (title, content, callback) => {
  //   dispatch({type: 'add_post', payload: {title, content}})
  //   if (callback) {
  //     callback()
  //   }
  // }

  const addDiaryPost = (dispatch) => {
    return (
      (title, content, callback) => {
        dispatch({type: 'add_post', payload: {title, content}})
        if (callback) {
          callback()
        }
      }
    )
  }

  // const deleteDiaryPost = (id) => {
  //   dispatch({type: 'delete_post', payload: id})
  // }

  const deleteDiaryPost = (dispatch) => {
    return (id) => {dispatch({type: 'delete_post', payload: id})}
  }

  // const editDiaryPost = (id, title, content, callback) => {
  //   dispatch({type: 'edit_post', payload: {id, title, content}})
  //   if (callback) {
  //     callback()
  //   }
  // } 
  
  const editDiaryPost = (dispatch) => {
    return (id, title, content, callback) => {
      dispatch({type: 'edit_post', payload: {id, title, content}})
      if (callback) {
        callback()
      }
    } 
  }

// }

// export default DiaryContext
export const {Context, Provider} = createDataContext(postReducer, 
  {addDiaryPost, deleteDiaryPost, editDiaryPost}, 
  [{id: 123, title: 'Test post 1', content: 'Test content so that we do not need to create a new post everytime we load'}], 
)
