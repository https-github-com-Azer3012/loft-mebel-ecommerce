import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSection from "./pages/Header-section";
import Carousel from "./components/Carousel";
import AllProducts from "./pages/AllProducts";
import Contact from "./pages/Contact";
import Basket from "./pages/Basket-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <div className="homepage">
        <HeaderSection />
        <Categories />

       
          <Switch>
            <Route exact path="/">
              <Carousel />
              <AllProducts />
            </Route>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/basket" component={Basket} />
          </Switch>
        
      </div>

      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
