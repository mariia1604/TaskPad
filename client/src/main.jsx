import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import MainPage from './MainPage.jsx'
import Workspace from './workspace.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Workspace />
    </Provider>
)
