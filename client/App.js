import React, {useEffect} from 'react'
import { createSession } from "./store/watson";
import { useDispatch } from "react-redux";
import axios from "axios";

import Navbar from './components/Navbar'
import Routes from './Routes'

if (localStorage.session) {
  delete axios.defaults.headers.common['session_id']
  axios.defaults.headers.common['session_id'] = localStorage.session
} else {
  delete axios.defaults.headers.common['session_id']
}

const App = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    if (!localStorage.session) {
      dispatch(createSession())
    }
  })


  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
