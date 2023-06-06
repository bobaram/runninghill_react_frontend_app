import Navbar from "./components/Navbar";
import Body from "./components/Body/Body";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Body />
    </Router>
  );
}

export default App;
