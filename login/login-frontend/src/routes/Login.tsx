import { useState } from "react"
import { useNavigate } from "react-router"

function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

    const navigate = useNavigate()

    const handleClick = async () => {
        try {
            if (!email || !senha) {
                setErro("Preencha todos os campos")
                return
            }

            const response = await fetch("https://login-vijy.onrender.com/api/login", {
                credentials: "include",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha })
            })

            const data = response.json()

            if (!response.ok) {
                if (response.status === 401) {
                    setErro("Email ou senha incorretos")
                    return
                }
                else {
                    setErro("Erro interno. Tente novamente mais tarde")
                    console.log(data)
                    return
                }
            }

            console.log("Usuário autenticado")
            navigate("/")
        }
        catch (err) {
            console.log("Erro: ", err)
        }
    }

    return (
        <>
            <div className="form-container">
                <h1>Login</h1>

                <div className="form">
                    <label htmlFor="email">Digite seu email: </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id="email"
                    />
                    <label htmlFor="senha">Digite sua senha: </label>
                    <input
                        onChange={(e) => setSenha(e.target.value)}
                        type="password"
                        name="senha"
                        id="senha"
                    />
                </div>

                <p className="erro">{erro}</p>

                <button onClick={handleClick}>Login</button>
            </div>
        </>
    )
}

export default Login