import React from 'react'
import {RECIPE} from './recipe-data'
import Card from './Card'
import UserRating from './UserRating'
import './styles.css'

export default function RecipeCard() {
  return (
    <Card>
      <div>
        <UserRating/>
      </div>
    </Card>
  )
}
