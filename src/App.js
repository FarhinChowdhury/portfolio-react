import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
      <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/reactportfolio/portfolio/" component={Portfolio} />
        <Route exact path="/reactportfolio/" component={Home} />
        <Route exact path="/reactportfolio/contact/" component={Contact} />
        <Footer/>
      </div>
      </Router>
  );
}

export default App;
