import { useState } from "react"

interface LoggedProp {
  loginData: Data
}

interface Data {
  nome: string,
  role: string
}

function LoggedIn({ loginData }: LoggedProp) {
  const [count, setCount] = useState(0)

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/logout", {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })

      const data = await response.json()

      if (!response.ok) {
        console.log(data)
        return
      }

      console.log(data)
      window.location.reload()
    }
    catch (err) {
      console.log("Erro: ", err)
    }
  }

  return (
    <>
      <div className="main-container">
        <h1>Bem-vindo, <span className="nome">{loginData.nome}!</span></h1>
        <p>Seu login foi feito com sucesso!</p>
        <p className="cont">Contador: {count}</p>
        <button className="clique" onClick={() => setCount(count + 1)}>Clique aqui!</button>
        <button onClick={handleClick}>Sair</button>
      </div>
    </>
  )
}

export default LoggedIn