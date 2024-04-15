import Header from './components/header/Header';
import RecipeMainContainer from './components/recipe/RecipeMainContainer';
import Footer from './components/footer/Footer';
import { useContext } from 'react';
import Context from './context/Context';
import About from './components/main/about/About';
import FAQ from './components/main/faq/FAQ';
import Divider from './components/shared/Divider';
// import Cookiebar from './components/cookiebar/Cookiebar';
/* import Lightbox from './components/shared/Lightbox'; */

function App() {
  const context = useContext(Context);

  if (!context) return;

  // const { isCookiebarOpen } = context;

  return (
    <>
      <Header />
      <main className="main-section">
        <RecipeMainContainer />
        <FAQ />
        <Divider />
        <About />
      </main>
      <Footer />
      {/* {isCookiebarOpen && <Cookiebar />}
      {/*   <Lightbox /> will depend on modalState! */}
    </>
  );
}

export default App;
