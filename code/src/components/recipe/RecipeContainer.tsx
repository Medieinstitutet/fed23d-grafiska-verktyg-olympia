import React from 'react';
import Panel from './Panel';
import { Recipes, Recipe } from '../../data/Recipes';
import RecipeCounter from './RecipeCounter.tsx';

interface Props {
  recipe: Recipe; // Define the type of the recipe prop
}

const RecipeContainer = ({ recipe }: Props) => {
  return (
    // <div className="recipe-container">
    //   {Recipes.map((recipe, index) => (
    //     <div key={index}>
    //       <div className="recipe-title">{recipe.title}</div>
    //       <div className="recipe-image">
    //         <img
    //           src={recipe.image.src}
    //           alt={recipe.image.alt}
    //           width={recipe.image.width}
    //           height={recipe.image.height}
    //         />
    //       </div>
    //       <RecipeCounter />
    //       <div className="recipe-details">
    //         <Panel height="250px" recipe={recipe} showIngredients />
    //         <Panel height="250px" recipe={recipe} showInstructions />
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div>
      <div className="recipe-title">{recipe.title}</div>
      <div className="recipe-image">
        <img src={recipe.image.src} alt={recipe.image.alt} width={recipe.image.width} height={recipe.image.height} />
      </div>
      <RecipeCounter />
      <div className="recipe-details">
        <Panel height="250px" recipe={recipe} showIngredients />
        <Panel height="250px" recipe={recipe} showInstructions />
      </div>
    </div>
  );
};

export default RecipeContainer;
