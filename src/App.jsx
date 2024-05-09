import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import Users from './components/Users'
import Home from './components/Home'
import Topics from './components/Topics'
import DefaultUserList from './components/DefaultUserList'
import ArticleCard from './components/ArticleCard'
import CommentsList from './components/CommentsList'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ArticlesByTopic from './components/ArticlesByTopic'

function App() {

  return (
    <div className='app'>
      <Header />
      <div className="section">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/articles" element={<ArticlesList />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/signup" element={<DefaultUserList />}/>
          <Route path="/topics" element={<Topics />}/>
          <Route path="/topics/:topicSlug" element={<ArticlesByTopic />}/>
          <Route path="/articles/:articleId" element={<ArticleCard />}/>
          <Route path="/articles/:articleId/comments" element={<CommentsList />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
