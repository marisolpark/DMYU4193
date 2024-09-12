import React from 'react'
import {RECIPE} from './recipe-data'
import RecipeInfo from './RecipeInfo'
import RecipeImg from './RecipeImg'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import Card from './Card'
import UserRating from './UserRating'
import './styles.css'
//it is NOT recommended to change the name of components because to can get confusing since there are so many parents, children and granchildren

// HW: Apply CSS styling, dont forget to import the style sheet in the other component files!
// Figma designs here: https://www.figma.com/file/oPToKD0BEwCUQFt3OjCDw6/RecipeCardStarter?node-id=2%3A134&mode=dev
// Or if youre feeling fancy, design your own!
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
        <UserRating/>
      </div>
    </Card>
  )
}
