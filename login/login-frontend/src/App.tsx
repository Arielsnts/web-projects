import { useEffect, useState } from 'react'
import './App.css'
import LoggedIn from './components/LoggedIn'
import LoggedOut from './components/LoggedOut'

interface Data {
  nome: string,
  role: string
}

function App() {
  const [data, setData] = useState<Data | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = async () => {
      try {
        const response = await fetch("https://login-vijy.onrender.com/api/user/me", {
          credentials: "include"
        })

        if (response.status === 401) {
          console.log("Usuário não está logado")
          setData(null)
        } else if (!response.ok) {
          console.log("Erro na requisição: ", response.status)
        } else {
          const dataAPI = await response.json()
          setData(dataAPI);
        }
      } catch (err) {
        console.log("Erro ao buscar dados de usuário: ", err)
      } finally {
        setLoading(false)
      }
    }

    auth()
  }, [])

  return (
    <>
      {loading ? (
        <p></p>
      ) : data ? (
        <LoggedIn loginData={data} />
      ) : (
        <LoggedOut />
      )}
    </>
  )
}

export default App
