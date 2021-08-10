import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Raffle from "./components/Raffle/Raffle";
import RaffleForm from "./components/RaffleForm/RaffleForm";
import ProductRaffle from "./components/ProductRaffle/ProductRaffle";
import Payment from "./components/Payment/Payment";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import AllProducts from "./components/AllProducts/AllProducts";

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
            <AllProducts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;