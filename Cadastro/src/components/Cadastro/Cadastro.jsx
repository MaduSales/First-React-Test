//1) import
import './Cadastro.css'

//2) function
function Cadastro(props){
  return(
    <div className='content'>
    <h2>Cadastro</h2>
    <p>Nome:{props.nome}</p>
    <p>Idade: {props.idade}</p>
    <p>E-mail: {props.email}</p>
    <p>Endereço: {props.endereco}</p>
    <p>CPF: {props.cpf}</p>
    <p>Senha: {props.senha}</p>
    </div>
  )
}

//3) exportação

export default Cadastro