import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detailpage from "./pages/Detailpage";
import Aboutpage from "./pages/Aboutpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<Aboutpage />} />
        <Route path="/detail/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
