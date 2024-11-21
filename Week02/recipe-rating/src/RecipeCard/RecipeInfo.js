import React from 'react'
import './styles.css'

export default function RecipeInfo(props) {
  const {title, description} = props
  return (
    <div className='recipe_info'>
      {/* There should only be one h1 per page so if there are multiple recipes we want to have in on h2 or lower */}
      <h2 className='recipe_title'>{title}</h2> 
      <p>{description}</p>
    </div>
  )
}
