import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { login } from '../utils/httpClient'

//TODO: Cambiar a Tailwind
// import 'bootstrap/dist/css/bootstrap.min.css'

login("artime", "artime80").then((data) => {
  console.log(data)
  console.log(data.token)
  // Save Token
  localStorage.setItem("token", data.token)

  

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})

