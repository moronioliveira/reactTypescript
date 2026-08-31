import { useState } from 'react'
import './App.css'

function App() {

  const [inputNome, setInputNome] = useState<string>("");
  const [inputIdade, setInputIdade] = useState<number>(0);
  const [calculo, setCalculo] = useState<number>(0);

  function calcular(){
    const idade = (2026 - inputIdade)
    setCalculo(idade)
    setInputNome("")
    setInputIdade(0)
  }
  return (
   <div className='container'>
     <h1 className='title'>Descubra sua idade</h1>
     <br />
    <article className='card'>
      Digite seu nome
      <input
      value={inputNome}
      onChange={(e)=>
        setInputNome(e.target.value)
      }
      className='input'
      type="text" />
      Digite o ano que nasceu
      <input
      value={inputIdade}
      onChange={(e)=> 
        setInputIdade(Number(e.target.value))
      }
      className='input'
      type="text" />

      <button 
      onClick={calcular}
      className='button'>Descobrir idade</button>
    </article>
    <br />
    {calculo ? <p className='mensagem'>Olá {inputNome} a sua idade atual é {calculo}</p> : ""}

   </div>
  )
}

export default App
