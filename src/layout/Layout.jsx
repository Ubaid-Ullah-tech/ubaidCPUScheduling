import React from 'react'
import CpuScheduling from '../componentsss/CpuScheduling'
import Navbar from '../componentsss/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <header>
          <Navbar/>
      </header>
      {location.pathname === '/' &&(
        <main>
          <CpuScheduling/>

        </main>
      )}
      <main>   
          <Outlet/>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default Layout
