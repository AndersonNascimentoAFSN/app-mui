import React from 'react';
import AppBar from '../components/AppBar';
import SideBar from '../components/SideBar';

export default function Layout({children}) {
  return (
    <div>
      <AppBar />
      <SideBar />
      <div>
        {children}
      </div>
    </div>
  )
}
