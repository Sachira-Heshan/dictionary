import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dictionary" element={<Dictionary />} />
          </Routes>
        </Header>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
