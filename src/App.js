import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
