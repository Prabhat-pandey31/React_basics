import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import PostList from './components/PostList'
import PostListProvider from './store/post-list-store'

function App() {
  const [selectedTab, setSeklectedTab] = useState("Create Post");

  return (
    <PostListProvider>
      <div className='app-container'>
    <Sidebar selectedTab={selectedTab} setSeklectedTab={setSeklectedTab}></Sidebar>
    <div className='content'>
     <Header></Header>
     {selectedTab==='Home' ?(<PostList></PostList>):(
      <CreatePost></CreatePost>
     )}
     <CreatePost></CreatePost>
     <PostList></PostList>
     <Footer></Footer>
     </div>
     </div>
     </PostListProvider>
  )
}

export default App
