import './App.css';
import Footer from './view/Footer';
import Header from './view/Header';
import Home from './view/Home';
import Tour from './view/Tour'
import TourDetail from './view/TourDetail';
import Blog from './view/Blog'
import BlogDetail from './view/BlogDetail';
// import "swiper/css/bundle";

function App() {
  return (
    <div>
      <Header/>
      {/* <Home/> */}
      {/* <Tour/> */}
      {/* <TourDetail/> */}
      {/* <Blog/> */}
      <BlogDetail/>
      <Footer/>
    </div>
  );
}

export default App;
