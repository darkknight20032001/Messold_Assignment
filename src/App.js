import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Video from "./Components/Video";
import Carousel from "./Components/Carousel";
import Gifts from "./Components/Gifts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <Video />
      <Carousel />
      <Gifts />
    </div>
  );
}

export default App;
