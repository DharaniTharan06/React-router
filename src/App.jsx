import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Header , Footer , Home , About , Contact , Github , Params} from './Components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/github' element={<Github/>}/>
        <Route path='/params' element={<Params/>}/>
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
