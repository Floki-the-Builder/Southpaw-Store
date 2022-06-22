import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <h1> Welcome to SouthPaw Presicion Store</h1>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
