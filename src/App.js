import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import RaffleForm from "./components/RaffleForm/RaffleForm";
import ProductRaffle from "./components/ProductRaffle/ProductRaffle";
import Payment from "./components/Payment/Payment";
import MyShoes from "./components/MyShoes/MyShoes";
import Impressum from "./components/Impressum/Impressum";
import Shipping from "./components/Shipping/Shipping";
import Contact from "./components/Contact/Contact";
import Privacy from "./components/Privacy/Privacy";
import Conditions from "./components/Conditions/Conditions";
import SliderComponent from "./components/Slider/Slider";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Profile from "./components/Profile/Profile";
import Account from "./components/Account/Account";
import Products from "./components/AllProducts/Products";
import Raffle from "./components/Raffle/Raffle";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/raffle">
            <Raffle />
          </Route>
          <Route path="/raffle-form">
            <RaffleForm />
          </Route>
          <Route path="/raffle-product">
            <ProductRaffle />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/allProducts">
            <Products />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/myshoes">
            <MyShoes />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/impressum">
            <Impressum />
          </Route>
          <Route path="/shipping">
            <Shipping />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/conditions">
            <Conditions />
          </Route>
          <Route path="/slider">
            <SliderComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
