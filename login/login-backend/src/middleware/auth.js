import jwt from "jsonwebtoken"

export function autenticar(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({erro: "Usuário não está logado"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    }
    catch (err) {
        res.status(500).json({erro: "Token inválido ou expirado"})
    }
}