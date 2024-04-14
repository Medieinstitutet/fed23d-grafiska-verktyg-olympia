import React from 'react';
import { Recipe } from '../../data/Recipes';

interface PanelProps {
  height: string;
  recipe: Recipe;
  showIngredients?: boolean;
  showInstructions?: boolean;
}

const Panel = ({ height, recipe, showIngredients, showInstructions }: PanelProps) => {
  return (
    <div className="panel" style={{ height }}>
      {showIngredients && (
        <>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.amount && <span>{ingredient.amount} </span>}
                {ingredient.unit && <span>{ingredient.unit} </span>}
                {ingredient.description}
                <br />
                {ingredient.extras && <span> ({ingredient.extras})</span>}
              </li>
            ))}
          </ul>
        </>
      )}
      {showInstructions && (
        <>
          <h3>Instructions:</h3>
          <p>{recipe.instructions}</p>
        </>
      )}
    </div>
  );
};

export default Panel;
