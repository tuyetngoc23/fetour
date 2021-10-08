import './App.css';
import Footer from './view/Footer';
import Header from './view/Header';
import Home from './view/Home';
import Tour from './view/Tour'
import TourDetail from './view/TourDetail';
import Blog from './view/Blog'
import BlogDetail from './view/BlogDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Booking from './view/Booking';
import OrderDetail from './view/OrderDetail';
import Contact from './view/Contact';
// import "swiper/css/bundle";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route  path="/tour" component={Tour}></Route>
          <Route  path="/blog" component={Blog}></Route>
          <Route  path="/blogdetail/:id" component={BlogDetail}></Route>
          {/* <Redirect from="*" to="/tourdetail/:id" />
          <Route  path="/tourdetail" component={TourDetail}></Route> */}
          <Route  path="/tourdetail/:id" component={TourDetail}></Route>
          <Route exact path="/booking" component={Booking}></Route>
          <Route  path="/orderdetail" component={OrderDetail}></Route>
          <Route  path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
