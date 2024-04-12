import React from 'react';

const RecipeCounter = () => {
  return (
    <div className="counter">
      <button>-</button>
      <input type="number" name="portions" id="portions" value={1} />
      <button>+</button>
    </div>
  );
};

export default RecipeCounter;
