import { useState } from "react"
import { useNavigate } from "react-router"
import "./routes.css"

function Cadastro() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

    const navigate = useNavigate()

    const handleClick = async () => {
        try {
            if (!nome || !email || !senha) {
                setErro("Preencha todos os campos")
                return
            }

            if (senha.length < 8) {
                setErro("A senha deve ter no mínimo 8 caracteres")
                return
            }

            const response = await fetch("https://login-vijy.onrender.com/api/cadastro", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, email, senha })
            })

            if (!response.ok) { 
                if (response.status === 400) {
                    setErro("Esse email já foi cadastrado")
                    return
                }
                else {
                    setErro("Erro interno. Tente novamente mais tarde")
                    return
                }
            }

            console.log("Usuário cadastrado")
            navigate("/")
        }
        catch (err) {
            console.log("Erro: ", err)
        }
    }

    return (
        <div className="form-container">
            <h1>Cadastro</h1>

            <div className="form">
                <label htmlFor="username">Digite seu username:</label>
                <input
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                />
                <label htmlFor="email">Digite seu email:</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                />
                <label htmlFor="senha">Digite sua senha:</label>
                <input
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                    name="senha"
                    id="senha"
                />
            </div>

            <p className="erro">{erro}</p>

            <button onClick={handleClick}>Cadastre-se</button>

            <p>Após o cadastro, faça <span className="login">login</span>!</p>
        </div>
    )
}

export default Cadastro