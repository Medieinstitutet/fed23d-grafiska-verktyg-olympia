import RecipeMainContainer from './components/recipe/RecipeMainContainer.tsx';
import RecipeImage from './components/recipe/RecipeImage.tsx';
import Footer from './components/footer/Footer';
import About from './components/main/about/About';
/* import Lightbox from './components/shared/Lightbox'; */

function App() {
  return (
    <>
      <RecipeMainContainer />
      <RecipeImage imageUrl="" />
      <About />
      <Footer />
      {/*   <Lightbox /> will depend on modalState! */}
    </>
  );
}

export default App;
