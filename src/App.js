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
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";
import Home1 from "./pages/home/Home1"
import { useState } from 'react';
import TourList from './pages/tourList/TourList';
import NewTour from './pages/newTour/NewTour';
import PlaceList from './pages/placeList/PlaceList';
import Place from './pages/place/Place';
import NewPlace from './pages/newPlace/NewPlace';
import CattourList from './pages/cattourList/CattourList';
import NewCattour from './pages/newCattour/NewCattour';
import DepartmentList from './pages/deparmentList/DepartmentList';
import NewDepartment from './pages/newDepartment/NewDepartment';
import HotelList from './pages/hotelList/HotelList';
import NewHotel from './pages/newHotel/NewHotel';
import VehicleList from './pages/vehicleList/VehicleList';
import NewVehicle from './pages/newVehicle/NewVehicle';
import BlogList from './pages/blogList/BlogList';
import Blog1 from './pages/blog/Blog1';
import NewBlog from './pages/newBlog/NewBlog';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
// import "swiper/css/bundle";

function App() {
  let isAdmin = false;
  
  const user = useSelector(state => state.user.user)
  console.log(user);
  if(user != null){
    if(user.role.role === "ADMIN"){
      isAdmin = true;
    }
  }else{
    isAdmin = false;
  }
  return (
    <>
      {
        isAdmin === false ?
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          {/* <Route exact path="/admin" component={Home1}></Route> */}
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
        <Route  path="/tour/:tourId" component={Tour1}></Route>
        <Route exact path="/newtour" component={NewTour}></Route>
        <Route exact path="/places" component={PlaceList}></Route>
        <Route exact path="/place/:id" component={Place}></Route>
        <Route exact path="/newPlace" component={NewPlace}></Route>
        <Route exact path="/cattours" component={CattourList}></Route>
        <Route exact path="/newCattour" component={NewCattour}></Route>
        <Route exact path="/departments" component={DepartmentList}></Route>
        <Route exact path="/newDepartment" component={NewDepartment}></Route>
        <Route exact path="/hotels" component={HotelList}></Route>
        <Route exact path="/newHotel" component={NewHotel}></Route>
        <Route exact path="/vehicles" component={VehicleList}></Route>
        <Route exact path="/newVehicle" component={NewVehicle}></Route>
        <Route exact path="/blogs" component={BlogList}></Route>
        <Route exact path="/blog/:id" component={Blog1}></Route>
        <Route exact path="/newBlog" component={NewBlog}></Route>
      </Switch>
      </div>
    </BrowserRouter>
      }
    </>
  );
}

export default App;
