import { useState } from 'react'
import Header from './components/Header'
import Users from './components/Users'
import DefaultUserList from './components/DefaultUserList'
import Topics from './components/Topics'
import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [topics, setTopics] = useState("");
  const [topicsLists, setTopicsLists] = useState([]);

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
      <div className="section3">
          <Topics
          setTopics={setTopics}
          topicsLists= {topicsLists}
          setTopicsLists= {setTopicsLists}
          />
      </div>
    </div>
  )
}

export default App
