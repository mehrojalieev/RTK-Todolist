import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { taskSlice } from './api/taskSlice.js'

ReactDOM.createRoot(document.getElementById('root')).render(
      <ApiProvider api={taskSlice}>
        <App />
      </ApiProvider>
)
