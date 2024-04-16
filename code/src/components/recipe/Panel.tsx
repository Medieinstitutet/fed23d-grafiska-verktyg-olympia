import React from 'react';
import { Recipe } from '../../data/Recipes';

interface PanelProps {
  height: string;
  recipe: Recipe;
  showIngredients?: boolean;
  showInstructions?: boolean;
}

function decimalToFraction(decimal: number) {
  const tolerance = 1.0e-6;
  let numerator = 1;
  let denominator = 1;
  let error = decimal - numerator / denominator;
  while (Math.abs(error) > tolerance) {
    if (error > 0) {
      numerator++;
    } else {
      denominator++;
    }
    error = decimal - numerator / denominator;
  }
  if (numerator === denominator) {
    return String(numerator);
  } else if (numerator > denominator) {
    const wholeNumber = Math.floor(numerator / denominator);
    numerator %= denominator;
    return `${wholeNumber} ${numerator}/${denominator}`;
  } else {
    return `${numerator}/${denominator}`;
  }
}

const Panel = ({ height, recipe, showIngredients, showInstructions }: PanelProps) => {
  return (
    <div className="panel invisible-scrollbar" style={{ height }}>
      {showIngredients && (
        <>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.amount && !Number.isInteger(ingredient.amount)
                  ? decimalToFraction(ingredient.amount)
                  : ingredient.amount}{' '}
                &nbsp;
                {ingredient.unit && (
                  <span>
                    {ingredient.unit}
                    {ingredient.amount && ingredient.amount > 1 && 's'}
                    &nbsp;
                  </span>
                )}
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
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </>
      )}
    </div>
  );
};

export default Panel;
