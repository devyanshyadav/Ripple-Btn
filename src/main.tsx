import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RippleBtn } from './components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RippleBtn className="bg-red-500 rounded-lg p-2 px-4 text-white font-semibold" >Hello world</RippleBtn>
  </React.StrictMode>,
)
