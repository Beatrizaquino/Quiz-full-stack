import styles from '../src/styles/Resposta.module.css'
import RespostaModal from "model/resposta"

interface RespostaProps {
    valor: RespostaModal
    indice: number
    letra: string
    corFundoLetra: string
}

export default function Resposta(props: RespostaProps) {

    const resposta = props.valor

     return (
        <div className={styles.resposta}>
            <div className={styles.consteudoResposta}>
                <div className={styles.frente}>
                    <div className={styles.letra}
                    style={{backgroundColor: props.corFundoLetra}}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>

                </div>
                <div className={styles.verso}>

                </div>
            </div>
        
        </div>
     )
}