import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Authentication from './components/Authentication'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Authentication/>
    </div>
  )
}

export default App
