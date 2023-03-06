
import QuestaoModel from "model/questao"
import styles from "../src/styles/Questionario.module.css"
import Botao from "./Botão"
import Questao from "./Questao"

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irParaProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {
    
    function respostaFornecida(indice: number){
        //quando a resposta for fonrecida, é importante gerar um evento somente quanfo a questão estiver respondida
        if(props.questao.naoRespondida) {
            //gerando um novo objeto e notificando o componente pai
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {/* //como a questao virá do backand, pode ser que ocorra 
            uma demora de resposta . Assim se a questoa estiver setada irá ezibir 
            a questo, caso contrario não irá retornar nada*/}
            {props.questao ?
                <Questao
                valor={props.questao}
                tempoPraResposta={10}
                respostaFornecida={respostaFornecida}
                tempoEsgotado={props.irParaProximoPasso}
            /> :false
            } 
                <Botao onclick={props.irParaProximoPasso} 
                    texto={props.ultima ? 'Finalizar' : 'Próximo'}
                />
        </div>
    )
}