import { useState } from 'react'
import AuthProvider from './component/auth/AuthProvider'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import TopBar from './component/topBar/TopBar'
import Home from './routes/home/Home'
import SideNavbar from './component/sidenavbar/SideNavBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <div className=' flex'>
            <aside className='h-[100dvh] xl:w-[20%] lg:w-[20%] md:w-[22%]'>
              <SideNavbar />
            </aside>
            <div className='min-h-[100dvh] xl:w-[80%] lg:w-[80%] md:w-[78%]'>
              <nav>
                <TopBar />
              </nav>
              <main>
                <Routes>
                  <Route path='/' element={<Home />} />
                </Routes>
              </main>
            </div>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
