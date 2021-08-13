import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Impressum from "./components/Impressum/Impressum";
import Shipping from "./components/Shipping/Shipping";
import Privacy from "./components/Privacy/Privacy";
import Conditions from "./components/Conditions/Conditions";
import SliderComponent from "./components/Slider/Slider";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Profile from "./components/Profile/Profile";
import Account from "./components/Account/Account";
import Products from "./components/AllProducts/Products";
import Raffle from "./components/Raffle/Raffle";
import RaffleForm from "./components/RaffleForm/RaffleForm";
import SingleProduct from "./components/ProductRaffle/SingleProduct";
import Payment from "./components/Payment/Payment";
import StripeContainer from "./components/Stripe/StripeContainer";
import Contact from "./components/Contact/Contact";
import MyShoes from "./components/MyShoes/MyShoes";
import Header from "./components/Admin/Header/Header";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import AllProduct from "./components/Admin/AllProduct/AllProduct";
import ContactMessage from "./components/Admin/ContactMessage/ContactMessage";
import OrderHistory from "./components/Admin/OrderHistory/OrderHistory";
import AdminRaffleProduct from "./components/Admin/AdminRaffleProduct/AdminRaffleProduct";
import UpdateProduct from "./components/Admin/UpdateProduct/UpdateProduct";

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
          <Route path="/raffle-product/:id">
            <SingleProduct />
          </Route>
          <Route path="/payment/:id">
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
          <Route path="/stripe/:id">
            <StripeContainer />
          </Route>
          <Route path="/admin">
            <Header />
          </Route>
          {
            //admin routes
          }
          <Route path="/add-product">
            <AddProduct />
          </Route>
          <Route path="/all-products">
            <AllProduct />
          </Route>
          <Route exact path="/contact-message">
            <ContactMessage />
          </Route>
          <Route exact path="/orderHistory">
            <OrderHistory />
          </Route>
          <Route exact path="/admin-raffle">
            <AdminRaffleProduct />
          </Route>
          <Route exact path="/update-product">
            <UpdateProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
