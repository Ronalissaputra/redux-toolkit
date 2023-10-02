import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailpage from "./pages/Detailpage";
import Aboutpage from "./pages/Aboutpage";
import Addpage from "./pages/Addpage";
import Berandapage from "./pages/Berandapage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Berandapage />} />
        <Route exact path="/about" element={<Aboutpage />} />
        <Route exact path="/add" element={<Addpage />} />
        <Route path="/detail/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
