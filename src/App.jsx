import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import PriceList from './components/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <h1 className="text-3xl font-bold underline ">
      Hello world!
    </h1>
    <PriceList></PriceList>
       
    </div>
  )
}

export default App
