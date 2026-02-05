import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext.jsx'
import {Provider} from 'react-redux';
import store from './store/store.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <Provider store={store}>
    <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
    </AuthProvider>
  </Provider>
</React.StrictMode>
)
