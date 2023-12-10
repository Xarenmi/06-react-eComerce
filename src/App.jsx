import './App.sass'
import React from 'react'
import RouterIndex from '@/Routes/RouterIndex'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 480) {
      document.querySelectorAll('.footer').forEach(function (element) {
        element.classList.add('hidden')
      })
    } else {
      document.querySelectorAll('.hidden').forEach(function (element) {
        element.classList.remove('hidden')
      })
    }
  })

  return (
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>
  );
}