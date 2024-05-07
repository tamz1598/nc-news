import { useState } from 'react'
import Header from './components/Header'
import Users from './components/Users'
import DefaultUserList from './components/DefaultUserList'
import './App.css'

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className='app'>
      <Header />
      <div className="section">
          <Users setUsername={setUsername}/>
      </div>
      <div className="section2">
          <DefaultUserList
          setUsername= {setUsername}
          />
      </div>
    </div>
  )
}

export default App
