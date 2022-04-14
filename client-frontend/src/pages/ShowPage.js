import React , { useState , useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShowPage = () => {
  const { id } =  useParams();

  const [ todo, setTodo ] = useState({})

  /* Navigation Hook to navigate from page -to-page*/
  const navigate = useNavigate()

  /* UseEffect collect when page mount */
  useEffect(() => {
    (async () => {
      try {
        const { fetchData } = await axios.get(`http://localhost:3001/todos/${id}`)
        setTodo(fetchData);
      }catch (err) {
        console.log(err)
      }
    })()
  },[])

  const deletedList = async () =>{
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`)
    }catch (err) {
      console.log()
    } finally {
      navigate(-1)
    }
  }

  return(
    <div className='show-Page'>
      <h1>ShowPage</h1>
    </div>
  )
}

export default ShowPage