import styles from './page.module.css'

export default function Sobre() {
    return (
        <div className={styles.principal}>
            <h1>Sobre</h1>
            <p>
                Este é o meu primeiro projeto utilizando Next.js. Trata-se de um blog simples, com finalidade exclusivamente didática, criado para praticar conceitos fundamentais da ferramenta.
                <br /><br />
                O site conta com:
            </p>
            <ul>
                <li>Postagens com dados estáticos</li>
                <li>Uma página Sobre</li>
                <li>Uma página de Contato</li>
            </ul>
            <a href="" className={styles.codigo}>Clique para acessar o código</a>
        </div>
    )
}
