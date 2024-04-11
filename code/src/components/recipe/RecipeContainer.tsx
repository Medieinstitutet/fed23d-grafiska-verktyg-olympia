import React from 'react';
import RecipeImage from './RecipeImage';
import Panel from './Panel';

const RecipeContainer = () => {
  return (
    <div className="recipe-container">
      <Panel height="250px" />
      <Panel height="290px" />
    </div>
  );
};

export default RecipeContainer;
