import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSection from "./pages/Header-section";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="homepage">
        <HeaderSection />
        <Categories />
      </div>

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
