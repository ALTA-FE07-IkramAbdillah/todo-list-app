import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import DetailTodo from "./page/DetailTodo";
import NavBar from "./component/NavBar";
import axios from "axios";

function App() {
  //Token
  axios.defaults.headers.common = {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  };
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
