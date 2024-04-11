import { useState } from 'react';
import RecipeContainer from './components/RecipeContainer.tsx';
import RecipeMainContainer from './components/RecipeMainContainer.tsx';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <RecipeMainContainer />
      <Footer />
    </div>
  );
}

export default App;
