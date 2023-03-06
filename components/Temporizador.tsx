import { CountdownCircleTimer } from "react-countdown-circle-timer"
import styles from "../src/styles/Temporizador.module.css"

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado:  () => void
}

export default function Temporizador(props: TemporizadorProps) {

    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                /* colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]} */
                colors={['#004777', '#f7b801', '#A30000', '#A30000']}
                colorsTime={[7,5,2,0]}
             >
                    {({remainingTime}) => remainingTime }
            </CountdownCircleTimer>   
               
        </div>
    )
}