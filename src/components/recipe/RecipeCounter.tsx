import React, { useState } from 'react';

interface ServingsProps {
  onServingsChange: (servings: number) => void;
}

const RecipeCounter = ({ onServingsChange }: ServingsProps) => {
  const [servings, setServings] = useState(1);

  const handleDecrement = () => {
    if (servings > 1) {
      setServings(servings - 1);
      onServingsChange(servings - 1);
    }
  };

  const handleIncrement = () => {
    setServings(servings + 1);
    onServingsChange(servings + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setServings(value);
      onServingsChange(value);
    }
  };

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <input
        className="no-spinner"
        type="number"
        name="portions"
        value={servings}
        onChange={handleInputChange}
        aria-label="servings amount for ingredients"
      />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default RecipeCounter;
