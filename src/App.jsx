import React, { useState } from 'react'
import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize=10
  const[progress,setProgress]=useState(0)
  return (
    <>
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30">
      <LoadingBar color='#06b6d4' progress={progress} height={3} />
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Routes>
          <Route path='/' element={<News pageSize={pageSize} country='in' category='general' setProgress={setProgress} />} />
          <Route path='/business' element={<News pageSize={pageSize} country='in' key='business' category='business' setProgress={setProgress}/>} />
          <Route path='/entertainment' element={<News pageSize={pageSize} country='in' key='entertainment' category='entertainment' setProgress={setProgress}/>} />
          <Route path='/general' element={<News pageSize={pageSize} country='in' key='general' category='general' setProgress={setProgress}/>} />
          <Route path='/health' element={<News pageSize={pageSize} country='in' key='health' category='health' setProgress={setProgress}/>} />
          <Route path='/science' element={<News pageSize={pageSize} country='in' key='science' category='science' setProgress={setProgress}/>} />
          <Route path='/sports' element={<News pageSize={pageSize} country='in' key='sports' category='sports' setProgress={setProgress}/>} />
          <Route path='/technology' element={<News pageSize={pageSize} country='in' key='technology' category='technology' setProgress={setProgress}/>} />
          <Route path='/world' element={<News pageSize={pageSize} country='in' key='world' category='world' setProgress={setProgress} />} />
          <Route path='/nation' element={<News pageSize={pageSize} country='in' key='nation' category='nation' setProgress={setProgress}/>} />
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App