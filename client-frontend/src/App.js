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
        const { fetchData } = await axios.get(`http://localhost:3001/todos/table`);
        await setTodos(fetchData);
      }catch(err) {
        console.log(err)
      }
    })();
  },[submitTodos, buttonTodos]);

  const handleButtons = async ( todoStatus, id ) => {
   try {
     const { status } = await axios.put(`http://localhost:3001/todos/${id}`, {
       status: todoStatus,
     });
     if (status === 200 ) {
       setButtonTodos(!setButtonTodos);
     }else {
       console.log('error');
     }
    }
     catch (err) {
       console.log(err);
    
   }
  };

  const handleSubmit = async ( evt ) => {
    evt.preventDefault();
    try {
      await axios.post(`http://localhost:3001/todos` ,{ entry: entry.current.value, status: status.current.value.toUpperCase()});
      setSubmitTodos(!submitTodos);
      entry.current.value = "";
    }catch(err) {
      console.log(err);
    }
  };
  


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
