import { useContext, useState } from 'react';
import Panel from './Panel';
import { Recipe, adjustIngredientAmounts } from '../../data/Recipes';
import RecipeCounter from './RecipeCounter.tsx';
import Context from '../../context/Context.tsx';
import Lightbox from '../shared/Lightbox.tsx';

interface Props {
  recipe: Recipe;
}

const RecipeContainer = ({ recipe: initialRecipe }: Props) => {
  const [recipe, setRecipe] = useState(initialRecipe);
  const [showModal, setShowModal] = useState(false);
  const context = useContext(Context);
  if (!context) return;

  const { isMobile } = context;

  const handleServingsChange = (servings: number) => {
    const adjustedRecipe = adjustIngredientAmounts(recipe, servings);
    setRecipe(adjustedRecipe);
  };

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="recipe-wrapper" id="recipes">
      {isMobile ? (
        <button className="recipe-image" onClick={toggleModal}>
          <img src={recipe.image.src} alt={recipe.image.alt} width={recipe.image.width} height={recipe.image.height} />
          <div className="overlay">
            <div className="recipe-title">
              <h3>{recipe.title}</h3>
            </div>
          </div>
        </button>
      ) : (
        <>
          <div className="recipe-title">
            <h3>{recipe.title}</h3>
          </div>
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
            <Panel height="45%" recipe={recipe} showIngredients />
            <Panel height="55%" recipe={recipe} showInstructions />
          </div>
        </>
      )}

      <Lightbox isOpen={showModal} onClose={toggleModal}>
        <div className="recipe-container">
          <div className="recipe-title">
            <h3>{recipe.title}</h3>
          </div>
          <RecipeCounter onServingsChange={handleServingsChange} />
          <div className="recipe-details">
            <Panel height="45%" recipe={recipe} showIngredients />
            <Panel height="55%" recipe={recipe} showInstructions />
          </div>
        </div>
      </Lightbox>
    </div>
  );
};

export default RecipeContainer;
