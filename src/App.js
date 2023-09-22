import logo from "./logo.svg";
import "./App.css";
import ItemsDetail from "./components/ItemsDetail";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itemdetails/:id" element={<ItemsDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
