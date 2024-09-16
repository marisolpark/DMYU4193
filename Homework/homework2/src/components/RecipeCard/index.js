import React from 'react'
import {RECIPE} from './recipe-data'
import '../styles.css'
import RecipeInfo from './RecipeInfo'
import RecipeImg from '../RecipeCard/RecipeImg'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import Card from './Card'
import UserRating from './UserRating'

export default function RecipeCard() {
  return (
    //this is a components and it's children
    <Card>
      <RecipeImg imgSrc={RECIPE.imgSrc} />
      <div className='card_text'>
        <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
        <div className='card_lists'>
          <IngredientsList ingredients={RECIPE.ingredients} />
          <InstructionsList instructions={RECIPE.instructions} />
        </div>
        <div>
        <UserRating/>
        </div>
      </div>
    </Card>
  )
}
