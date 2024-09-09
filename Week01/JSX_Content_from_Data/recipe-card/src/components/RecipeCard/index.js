// import RECIPE_IMG from '../../assets/pancake.png'
// the {} is for multiple imports from the same file
import {RECIPE} from './recipe-data.js'
import Card from './Card.js'
import RecipeImg from './RecipeImg.js'
import RecipeInfo from './RecipeInfo.js'
import IngredientList from './IngredientList.js'
import InstructionList from './InstructionList.js'

export default function RecipeCard () {
    return (
        <Card>
            {/* recipe image */}
            <div>
                <RecipeImg imgSrc={RECIPE.imgSrc} altText={RECIPE.altText}/>
                {/* <img src={RECIPE.imgSrc} alt="pancake stack"/> */}
            </div>
            {/* layout div */}
            <div>
                {/* recipe info */}
               <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
            </div>
            <div>
                {/* ingredients list */}
                <IngredientList ingredients={RECIPE.ingredients} />
                {/* instructions list */}
                <InstructionList instructions={RECIPE.instructions} />
            </div>
        </Card>
    )
}
