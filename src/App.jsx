import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")
  return(
    <div className="w-half h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-black m-9 rounded-full gap-3 shadow-lg">
      <button
      onClick={() => setColor("Grey")} 
      className="rounded-full flex flex-wrap m-2 p-1 text-white font-sans font-bold px-4 py-2 bg-gray-600">Grey</button>
      <button 
            onClick={() => setColor("violet")} 

      className="rounded-full flex flex-wrap bg-violet-600 m-2 p-1 text-white font-sans font-bold px-4 py-2">Violet</button>
      <button 
            onClick={() => setColor("Blue")} 

      className="rounded-full flex flex-wrap bg-blue-600 m-2 p-1 text-white font-sans font-bold px-4 py-2">Blue</button>
      <button 
            onClick={() => setColor("Red")} 

      className="rounded-full flex flex-wrap bg-red-600 m-2 p-1 text-white font-sans font-bold px-4 py-2">Red</button>

      </div>


    </div>

  )

}

export default App
