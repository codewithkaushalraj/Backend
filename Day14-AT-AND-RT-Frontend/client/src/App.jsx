import React, { useContext } from 'react'
import { MyContext } from './context/MyContext'

const App = () => {
  const {user}=useContext(MyContext);
  return (
    <div>
      hello -{user}
    </div>
  )
}

export default App
