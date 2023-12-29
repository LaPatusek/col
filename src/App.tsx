import { Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import background from './Assets/col-background-first.webp';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Regulamin from './Pages/Regulamin';

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <Fragment>
      <nav>
        <Nav />
      </nav>

      <main>
        <img
          src={background}
          height={'100%'}
          width={'100%'}
          alt='City of Lights - Polski Serwer GTA RP'
          className='background'
        />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/main' element={<Main />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/regulamin' element={<Regulamin />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
