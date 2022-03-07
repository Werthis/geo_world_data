import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Graph from "./components/Graph/Graph";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Graph />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
