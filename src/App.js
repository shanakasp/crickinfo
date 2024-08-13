import { Route, Routes } from "react-router-dom";
import "./App.css";
import CurrentMatches from "./Components/CurrentMatches/CurrentMatches.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import SearchSeries from "./Components/SearchSeries/SearchSeries.jsx";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route>
          <Route path="/" element={<CurrentMatches />} />
          <Route path="/searchSeries" element={<SearchSeries />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
