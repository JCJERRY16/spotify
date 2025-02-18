import React, { useContext } from "react"
import Sidebar from "./Component/Sidebar"
import Player from "./Component/Player"
import Display from "./Component/Display"
import { PlayerContext } from "./Context/PlayerContext"



//import Sidebar from "./Component/Sidebar"
//import Sidebar from "./Component/Sidebar.jsx"----------
//importComponent/Sidebar.jsx;  "src/App.jsx"
const App = () => {
  
 const {audioRef,track} = useContext(PlayerContext)

  return (
   <div className="h-screen bg-black">
    <div className="h-[90%] flex">
    <Sidebar/>
    <Display/>
    </div>
    <Player/>
    <audio ref={audioRef} src={track.file}  preload="auto"></audio>
   </div>
  )

}

export default App
