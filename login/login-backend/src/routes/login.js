import express from "express"
import bcrypt from "bcrypt"
import User from "../models/User.js"
import jwt from "jsonwebtoken"

const router = express.Router()

router.post("/api/login", async (req, res) => {
    try {
        const { email, senha } = req.body

        const authUser = await User.findOne({ email })
        if (!authUser) {
            return res.status(401).json({ erro: "Email não encontrado" })
        }

        const senhaValida = await bcrypt.compare(senha, authUser.senha)
        if (!senhaValida) {
            return res.status(401).json({ erro: "Senha incorreta" })
        }

        const token = jwt.sign(
            { id: authUser._id, role: authUser.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 60000 * 60
        })

        res.status(200).json({
            msg: "Login realizado com sucesso",
            usuario: {
                _id: authUser._id,
                nome: authUser.nome,
                email: authUser.email,
                role: authUser.role
            }
        })
    }
    catch (err) {
        res.status(500).json({
            erro: "Erro de autenticação",
            details: err.message
        })
    }
})

export default router