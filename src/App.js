import React from "react"
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Sidebar from './components/Sidebar'
import History from './pages/History'
import Settings from './pages/Settings'
import Live from './pages/Live'

const Console = prop => (
  console[Object.keys(prop)[0]](...Object.values(prop))
  ,null // ➜ React components must return something 
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Live/>}/>
          <Route path='/live' index element={<Live/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/history' element={<History/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
