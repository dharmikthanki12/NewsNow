import React, { useState } from 'react'
import NavBar from './componet/NavBar'
import { Route,Routes } from 'react-router-dom'
import News from './componet/News'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize=10
  const[progress,setProgress]=useState(0)
  return (
    <>
    <LoadingBar color='#F8DE22' progress={progress} />
      <NavBar />
      <Routes>
        <Route path='/' element={<News pageSize={pageSize}  country='in'  category='general' setProgress={setProgress} />} />
        <Route path='/business' element={<News pageSize={pageSize} country='in' key='business' category='business' setProgress={setProgress}/>} />
        <Route path='/entertainment' element={<News pageSize={pageSize} country='in'  key='entertainment' category='entertainment' setProgress={setProgress}/>} />
        <Route path='/general' element={<News pageSize={pageSize} country='in' key='general' category='general' setProgress={setProgress}/>} />
        <Route path='/health' element={<News pageSize={pageSize} country='in' key='health' category='health' setProgress={setProgress}/>} />
        <Route path='/science' element={<News  pageSize={pageSize} country='in' key='science' category='science' setProgress={setProgress}/>} />
        <Route path='/sports' element={<News pageSize={pageSize} country='in' key='sports' category='sports' setProgress={setProgress}/>} />
        <Route path='/technology' element={<News pageSize={pageSize} country='in' key='technology' category='technology' setProgress={setProgress}/>} />
        <Route path='/world' element={<News  pageSize={pageSize} country='in' key='world' category='world' setProgress={setProgress} />} />
        <Route path='/nation' element={<News pageSize={pageSize} country='in' key='nation' category='nation' setProgress={setProgress}/>} />
      </Routes>
    </>
  )
}

export default App