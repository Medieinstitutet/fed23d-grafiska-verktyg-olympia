import RecipeMainContainer from './components/recipe/RecipeMainContainer';
import RecipeImage from './components/recipe/RecipeImage';
import Footer from './components/footer/Footer';
import About from './components/main/about/About';
/* import Lightbox from './components/shared/Lightbox'; */

function App() {
  return (
    <>
      <RecipeImage imageUrl="" />
      <RecipeMainContainer />
      <About />
      <Footer />
      {/*   <Lightbox /> will depend on modalState! */}
    </>
  );
}

export default App;
