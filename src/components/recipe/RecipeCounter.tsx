const RecipeCounter = () => {
  return (
    <div className="counter">
      <button>-</button>
      <input type="number" name="portions" id="portions" value={1} readOnly />
      <button>+</button>
    </div>
  );
};

export default RecipeCounter;
