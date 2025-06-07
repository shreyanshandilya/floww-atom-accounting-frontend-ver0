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
          <div className=' flex h-[100dvh] '>
            <SideNavbar />
            <div className='h-full w-full overflow-auto'>
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
