import Questao from 'components/Questao'
import QuestaoModel from 'model/questao'
import RespostaModal from 'model/resposta'
import { useEffect, useRef, useState } from 'react'

const questaoMock = new QuestaoModel(1, 'Qual é a Melhor cor na minha opinião ? ', [
  RespostaModal.errada('Azul'),
  RespostaModal.errada('Amarelo'),
  RespostaModal.errada('Rosa'),
  RespostaModal.certa('Preto'),
  ])

export default function Home() {

  const [questao, setQuestao] = useState(questaoMock)
  const questaoRef = useRef<QuestaoModel>()

    //gereando efeiito na mudança do nosso componentes
    useEffect(()  => {
      questaoRef.current = questao
    }, [questao]) 

    function respostaFornecida (indice: number) {
      //respondendo com o inbdeice ele vai gerar uma nova questão respondida
      setQuestao(questao.responderCom(indice))
    }

    //usuario escgotando o tempo vai errar a questao
    function tempoEsgotado() {
      //caso a questão esteja reponida o tempo ira zerar
      if(questaoRef.current.naoRespondida){    
      setQuestao(questaoRef.current.responderCom(-1))
      }
    }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>    
    <h1></h1>
      <Questao valor={questao} 
      tempoPraResposta={10}
      respostaFornecida={respostaFornecida}
      tempoEsgotado={tempoEsgotado}
      />
    </div>
  )
}