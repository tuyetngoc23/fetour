import './App.css';
import Footer from './view/Footer';
import Header from './view/Header';
import Home  from './view/Home';
import Tour from './view/Tour'
import Tour1 from './pages/tour/Tour1'
import TourDetail from './view/TourDetail';
import Blog from './view/Blog'
import BlogDetail from './view/BlogDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Booking from './view/Booking';
import OrderDetail from './view/OrderDetail';
import Contact from './view/Contact';
import Login from './view/Login';
// import { Router } from 'react-router';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Home1 from "./pages/home/Home1"
import { useState } from 'react';
import TourList from './pages/tourList/TourList';
// import "swiper/css/bundle";

function App() {
  const [isAdmin, setIsAdmin] = useState(true)
  return (
    <>
      {
        isAdmin === false ?
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/admin" component={Home1}></Route>
          <Route  path="/tour" component={Tour}></Route>
          <Route  path="/blog" component={Blog}></Route>
          <Route  path="/blogdetail/:id" component={BlogDetail}></Route>
          <Route  path="/tourdetail/:id" component={TourDetail}></Route>
          <Route exact path="/booking" component={Booking}></Route>
          <Route  path="/orderdetail" component={OrderDetail}></Route>
          <Route  path="/contact" component={Contact}></Route>
          <Route  path="/login" component={Login}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      : 
      <BrowserRouter>
      <Topbar />
      <div style={{display: 'flex', marginTop: '10px'}}>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home1}></Route>
        <Route exact path="/users" component={UserList}></Route>
        <Route exact path="/user/:userId" component={User}></Route>
        <Route exact path="/newUser" component={NewUser}></Route>
        <Route exact path="/tours" component={TourList}></Route>
        <Route exact path="/tour/:tourId" component={Tour1}></Route>
        {/* <Route exact path="/tour/:tourId" component={Product}></Route> */}
        <Route exact path="/newtour" component={NewProduct}></Route>
      </Switch>
      </div>
    </BrowserRouter>
      }
      {/* <BrowserRouter>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>  */}
    </>
  );
}

export default App;
