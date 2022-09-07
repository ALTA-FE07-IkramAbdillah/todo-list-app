import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import DetailTodo from "./page/DetailTodo";
import NavBar from "./component/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailTodo />} />
      </Routes>
    </Router>
  );
}

export default App;
