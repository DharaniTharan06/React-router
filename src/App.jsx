import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { Header , Footer , Home , About , Contact , Github , Params} from './Components'
import './App.css'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='github' element={<Github/>}/>
        <Route path='params/:id' element={<Params/>}/>
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
