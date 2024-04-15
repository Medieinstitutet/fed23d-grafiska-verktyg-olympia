import React from 'react';
import Panel from './Panel';
import { Recipe } from '../../data/Recipes';
import RecipeCounter from './RecipeCounter.tsx';

interface Props {
  recipe: Recipe;
}

const RecipeContainer = ({ recipe }: Props) => {
  return (
    <div className="recipe-container">
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
