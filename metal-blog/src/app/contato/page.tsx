import styles from './page.module.css'

export default function Sobre() {
    return (
        <div className={styles.principal}>
            <h1>Contato</h1>
            <p>Se você quiser saber mais ou entrar em contato, seguem abaixo meus links:</p>
            <ul>
                <li>Github: <a href="https://github.com/Arielsnts" target='_blank'>https://github.com/Arielsnts</a></li>
                <li>Email: <a href="#">Arielsant520@gmail.com</a></li>
            </ul>
        </div>
    )
}