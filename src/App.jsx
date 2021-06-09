import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import './assets/styles/main.scss';

const App = () => (
  <div className='App'>
    <div className='wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
);

export default App;
