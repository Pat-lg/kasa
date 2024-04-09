import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;