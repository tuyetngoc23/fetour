import './App.css';
import Footer from './view/Footer';
import Header from './view/Header';
// import Home from './view/Home';
import Tour from './view/Tour'

function App() {
  return (
    <div>
      <Header/>
      {/* <Home/> */}
      <Tour/>
      <Footer/>
    </div>
  );
}

export default App;
