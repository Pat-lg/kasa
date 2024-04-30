import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Homepage from "./Homepage";
import About from "./About";
import Rentalpage from "./Rentalpage";
import ErrorPage from "./Errorpage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Rentalpage />} />
        <Route path="/error404" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;