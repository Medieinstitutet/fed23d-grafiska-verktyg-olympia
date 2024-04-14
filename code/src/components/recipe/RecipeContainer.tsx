import React from 'react';
import Panel from './Panel';
import { Recipes } from '../../data/Recipes';

const RecipeContainer = () => {
  return (
    <div className="recipe-container">
      {Recipes.map((recipe, index) => (
        <div key={index}>
          <Panel height="250px" recipe={recipe} showIngredients />
          <Panel height="250px" recipe={recipe} showInstructions />
        </div>
      ))}
      <h1>Test</h1>
    </div>
  );
};

export default RecipeContainer;
