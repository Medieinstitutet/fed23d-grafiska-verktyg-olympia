import Cookiebar from './components/cookiebar/Cookiebar';
import Footer from './components/footer/Footer';
import { useContext } from 'react';
import Context from './context/Context';

function App() {
  const context = useContext(Context);

  if (!context) return;

  const { isCookiebarOpen } = context;

  return (
    <>
      <Footer />
      {isCookiebarOpen && <Cookiebar />}
    </>
  );
}

export default App;
