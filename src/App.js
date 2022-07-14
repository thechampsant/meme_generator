import './App.scss'

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Meme from './components/meme_container/meme_container.component';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Meme/>
      <Footer/>
    </div>
  );
}

export default App;
