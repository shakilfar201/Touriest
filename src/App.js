import logo from './logo.svg';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import  PlaceOrder  from './components/PlaceOrder/PlaceOrder';
import MyOrder from './components/MyOrder/MyOrder';
import AddService from './components/AddService/AddService';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/service/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
