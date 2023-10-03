import { Routes, Route } from "react-router-dom"

import Header from './components/ui/Header'

import Homepage from './components/pages/Homepage'
import ErrorPage from './components/pages/Errorpage'
import Projects from './components/pages/Projects'
import Posts from './components/pages/Posts'
import SinglePost from "./components/pages/SinglePost"
import posts from "./index/posts"


import "./App.css"

function App() {

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="posts" element={<Posts />} />


          <Route path="posts/:slug" element={<SinglePost />} />
          <Route path="projects" element={<Projects />} />
        </Routes>

      </div>
    </div>
  )
}

export default App