import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../App.css';

function Layout() {
    return (
        <div className="layout">
          <header>
            <h1 className="title">To Do List</h1>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      )
}

export default Layout