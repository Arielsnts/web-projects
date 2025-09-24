import { Link } from "react-router"

function LoggedOut() {

    return (
        <>
            <div className="main-container">
                <h1>Bem-vindo!</h1>
                <p>Se você ainda não possui conta, <span className="cadastre">cadastre-se</span>!</p>
                <Link to={"cadastro"}>
                    <button className="cadastro-button" >Cadastro</button>
                </Link>
                <p>Ou faça <span className="login">login</span>, se você já possui conta!</p>
                <Link to={"/login"}>
                    <button className="login-button">Login</button>
                </Link>
            </div>
        </>
    )
}

export default LoggedOut