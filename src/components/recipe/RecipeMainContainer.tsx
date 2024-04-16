import RecipeContainer from './RecipeContainer.tsx';
import { Recipes } from '../../data/Recipes.ts';

const RecipeMainContainer = () => {
  return (
    <div className="recipe-main-container">
      {Recipes.map((recipe, index) => (
        <div key={index} className="recipe-container">
          <RecipeContainer recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeMainContainer;
