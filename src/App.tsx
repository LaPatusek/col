import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import background from './Assets/col-background-first.png';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';

function App() {
  return (
    <Fragment>
      <nav>
        <Nav />
      </nav>

      <main>
      <img src={background} height={'100%'} width={'100%'} alt='' className='background'/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/main' element={<Main />} />
          <Route path='/kontakt' element={<Kontakt />} />
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
