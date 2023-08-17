import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashbord from './Componets/Dashbord'
import Add from './Componets/Add'
import List from './Componets/List'
import Todoapp from './Context/Todo'
import Edit from './Componets/Edit';
// import REF from './REF';

const App = () => {
  const [allData, setAllData] = useState([])


  return (
    <>
      {/* <REF /> */ }

      <BrowserRouter>
        <Todoapp.Provider value={ { allData, setAllData } }>

          <Routes>
            <Route path="/" element={ <Dashbord /> } />
            <Route path="/add" element={ <Add /> } />
            <Route path="/list" element={ <List /> } />
            <Route path='/edit/:id' element={ <Edit /> } />
          </Routes>

        </Todoapp.Provider>
      </BrowserRouter >
    </>
  )
}

export default App
