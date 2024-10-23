//import React from 'react'
//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import App from './App'
//import './index.css'

//createRoot(document.getElementById('root')).render(
  //<StrictMode>
    //<App/>
       
    
  //</StrictMode>,
//)
//export default App

import React from "react"
import ReactDOM from 'react-dom/client' 
import App from "./App.jsx"
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import PlayerContextProvider from "./Context/PlayerContext.jsx"



ReactDOM.createRoot(document.getElementById('root') ).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
    <App/>
    </PlayerContextProvider>
    
     </BrowserRouter>
  
 </React.StrictMode>,
)
