import Cookiebar from './components/cookiebar/Cookiebar';
import RecipeMainContainer from './components/recipe/RecipeMainContainer';
import RecipeImage from './components/recipe/RecipeImage';
import Footer from './components/footer/Footer';
import { useContext } from 'react';
import Context from './context/Context';
import About from './components/main/about/About';
/* import Lightbox from './components/shared/Lightbox'; */

function App() {
  const context = useContext(Context);

  if (!context) return;

  const { isCookiebarOpen } = context;

  return (
    <>
      <RecipeImage imageUrl="" />
      <RecipeMainContainer />
      <About />
      <Footer />
      {isCookiebarOpen && <Cookiebar />}
      {/*   <Lightbox /> will depend on modalState! */}
    </>
  );
}

export default App;
