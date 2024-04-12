import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import About from './components/main/about/About';
/* import Lightbox from './components/shared/Lightbox'; */

function App() {
  return (
    <>
      <Header />
      <About />
      <Footer />
      {/*   <Lightbox /> will depend on modalState! */}
    </>
  );
}

export default App;
