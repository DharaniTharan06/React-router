import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home , About , Contact , Github , Params , gitLoader } from './Components'
import './index.css'
import App from './App.jsx'

/*Use <App/> if using BrowserRouter(the round-about way)*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: '', element: <Home/>},{ path: 'about', element: <About/>},
      { path: 'contact', element: <Contact/>},{ loader: gitLoader, path: 'github', element: <Github/>},
      { path: 'params/:id', element: <Params/>},{ path: '*', element: <h1>Page not found</h1>}
    ]
  }
]) /*This is one of the method without app

//The other method is as follows this is almost same as what we did in app
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route loader: {gitLoader} path='github' element={<Github/>}/>
      <Route path='params/:id' element={<Params/>}/>
      <Route path='*' element={<h1>Page not found</h1>}/>
    </Route>
  )
)*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
