// import React from 'react';
// import Panel from './Panel';
// import { Recipe } from '../../data/Recipes';
// import RecipeCounter from './RecipeCounter.tsx';

// interface Props {
//   recipe: Recipe;
// }

// const RecipeContainer = ({ recipe }: Props) => {
//   return (
//     <div className="recipe-container">
//       <div className="recipe-title">{recipe.title}</div>
//       <div className="recipe-image">
//         <img src={recipe.image.src} alt={recipe.image.alt} width={recipe.image.width} height={recipe.image.height} />
//       </div>
//       <RecipeCounter />
//       <div className="recipe-details">
//         <Panel height="250px" recipe={recipe} showIngredients />
//         <Panel height="250px" recipe={recipe} showInstructions />
//       </div>
//     </div>
//   );
// };

// export default RecipeContainer;

import { useContext, useState } from 'react';
import Panel from './Panel';
import { Recipe, adjustIngredientAmounts } from '../../data/Recipes';
import RecipeCounter from './RecipeCounter.tsx';
import Context from '../../context/Context.tsx';

interface Props {
  recipe: Recipe;
}

const RecipeContainer = ({ recipe: initialRecipe }: Props) => {
  const [recipe, setRecipe] = useState(initialRecipe);
  const context = useContext(Context);
  if (!context) return;

  const { isMobile } = context;

  const handleServingsChange = (servings: number) => {
    const adjustedRecipe = adjustIngredientAmounts(recipe, servings);
    setRecipe(adjustedRecipe);
  };

  return (
    <div className="recipe-container">
      {isMobile ? (
        <div className="recipe-image">
          <img src={recipe.image.src} alt={recipe.image.alt} width={recipe.image.width} height={recipe.image.height} />
          <div className="overlay">
            <div className="recipe-title">{recipe.title}</div>
          </div>
        </div>
      ) : (
        <>
          <div className="recipe-title">{recipe.title}</div>
          <div className="recipe-image">
            <img
              src={recipe.image.src}
              alt={recipe.image.alt}
              width={recipe.image.width}
              height={recipe.image.height}
            />
          </div>
          <RecipeCounter onServingsChange={handleServingsChange} />
          <div className="recipe-details">
            <Panel height="250px" recipe={recipe} showIngredients />
            <Panel height="250px" recipe={recipe} showInstructions />
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeContainer;
