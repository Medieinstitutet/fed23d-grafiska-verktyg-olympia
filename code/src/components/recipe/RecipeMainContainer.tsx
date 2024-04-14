import RecipeImage from './RecipeImage';
import RecipeContainer from './RecipeContainer.tsx';
import RecipeCounter from './RecipeCounter.tsx';
import { Recipes } from '../../data/Recipes';

const RecipeMainContainer = () => {
  return (
    // <div className="recipe-main-container">
    //   <div className="recipe-main-container__recipe">
    //     <RecipeContainer />
    //   </div>
    // </div>
    <div className="recipe-main-container">
      {Recipes.map((recipe, index) => (
        <div key={index} className="recipe-main-container__recipe">
          <RecipeContainer recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeMainContainer;
