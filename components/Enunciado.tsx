import styles from '../src/styles/Enunciado.module.css'

interface EnunciadoProps {
    texto: String
}

export default function Enunciado(props: EnunciadoProps) {

    return (
        <div className={styles.enunciado}>
            <span className={styles.texto}>{props.texto}</span>
        </div>
    )

}