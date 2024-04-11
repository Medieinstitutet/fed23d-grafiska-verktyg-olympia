import RecipeImage from './RecipeImage';
import RecipeContainer from './RecipeContainer.tsx';
import RecipeCounter from './RecipeCounter.tsx';

const RecipeMainContainer = () => {
  return (
    <div className="recipe-main-container">
      <h1>Bread Title</h1>
      {/* <RecipeImage imageUrl="" /> */}
      <RecipeCounter />
      <RecipeContainer />
    </div>
  );
};

export default RecipeMainContainer;
