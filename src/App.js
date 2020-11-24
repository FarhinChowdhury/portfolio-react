import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {HashRouter as Router, Route} from "react-router-dom"
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar/>
        <Route exact path="/portfolio/" component={Portfolio} />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact/" component={Contact} />
        <Footer/>
      </div>
      </Router>
  );
}

export default App;
