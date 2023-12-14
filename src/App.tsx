import { Fragment } from 'react';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main';

function App() {
  return (
    <Fragment>
      <nav>
        <Nav />
      </nav>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
