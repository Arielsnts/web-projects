import express from "express"
import { autenticar } from "../middleware/auth.js"
import User from "../models/User.js"

const router = express.Router()

router.get("/api/user/me", autenticar, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-senha")

        if (!user) {
            return res.status(404).json({ erro: "Usuário não encontrado" })
        }

        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({
            erro: "Erro ao tentar acessar dados do usuário",
            details: err.message
        })
    }
})

router.post("/api/logout", (req, res) => {
    res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            partitioned: true
        })
    res.status(200).json({ msg: "Logout feito com sucesso" })
})

export default router