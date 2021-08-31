import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSection from "./pages/Header-section";
import Carousel from "./components/Carousel";
import AllProducts from "./pages/AllProducts";



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="homepage">
        <HeaderSection/>
        <Categories/>
        <Carousel/> 
        <AllProducts/>  
      </div>

      <Footer/>
       
    </div>
  );
}

export default App;
