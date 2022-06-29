import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1> Welcome to SouthPaw Presicion Store</h1>
      <Catalog></Catalog>

      <About></About>
    </div>
  );
}

export default App;
