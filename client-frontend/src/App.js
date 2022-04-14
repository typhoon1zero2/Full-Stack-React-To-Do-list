import "./App.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from './components/Nav'
import ShowPage from "./pages/ShowPage";
import Layout from "./pages/layout/Layout";
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";



function App() {
  const [ todos, setTodos ] = useState({});
  const [submitTodos, setSubmitTodos] = useState(false);
  const [buttonTodos , setButtonTodos] = useState(false);
  const entry = useRef(null);
  const status = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { fetchData } = await.get`http:localhost:3001/todos/table`;
        await setTodos(fetchData);
      }catch(err) {
        console.log(err)
      }
    })();
  }[]);



    return (
        <>
          <main className="App">
            <Nav />
            <Routes>
              <Route path="/" element={<Layout />} />
            </Routes>
          </main>
        </>
      );
}






export default App;
