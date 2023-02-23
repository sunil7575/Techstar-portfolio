import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contect from "./components/Contect";
import Services from "./components/Services.jsx";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/contect.scss";



function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contect" element={<Contect/>}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      <Footer />
    </Router>

  );
}
export default App;