import './App.sass'
import React from 'react'
import RouterIndex from '@/Routes/RouterIndex'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
          <RouterIndex />
    </BrowserRouter>
  );
}