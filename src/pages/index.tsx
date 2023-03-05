import QuestaoModel from '../../model/questao'
import RespostaModal from '../../model/resposta'
import { useEffect, useRef, useState } from 'react'
import Questionario from 'components/Questionario'

const questaoMock = new QuestaoModel(1, 'Qual é a Melhor cor na minha opinião ? ', [
  RespostaModal.errada('Azul'),
  RespostaModal.errada('Amarelo'),
  RespostaModal.errada('Rosa'),
  RespostaModal.certa('Preto'),
  ])

export default function Home() {

  const [questao, setQuestao] = useState(questaoMock)

  function questaoRespondida(questao: QuestaoModel){
    
  }
   function irParaProximaQuestao() {

   }


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>    
      <Questionario
      questao={questao}
      ultima={true}
      questaoRespondida={questaoRespondida()}
      irParaProximaQuestao = {irParaProximaQuestao}
      >

      </Questionario>
    
    </div>
  )
}