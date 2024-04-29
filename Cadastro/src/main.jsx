import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Cadastro from './components/Cadastro/Cadastro.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cadastro nome =" Maria Eduarda" idade ="18" email ="maria.esmiranda08@gmail.com" endereco ="Jardim Aricanduva,76" cpf = "2901866297-89" senha = "123456789"/>
  </React.StrictMode>,
)
