import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home , About , Contact , Github , Params} from './Components'
import './index.css'
import App from './App.jsx'
/*Use <App/> if using BrowserRouter(the round-about way)*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: '', element: <Home/>},{ path: 'about', element: <About/>},
      { path: 'contact', element: <Contact/>},{ path: 'github', element: <Github/>},
      { path: 'params', element: <Params/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
