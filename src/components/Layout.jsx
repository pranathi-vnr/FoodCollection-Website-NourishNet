import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import React from 'react'

function Layout() {
  return (
    <div>
        <Header />
      {/* placeholder of dynamic component loading */}
      <div style={{minHeight:'110vh'}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout