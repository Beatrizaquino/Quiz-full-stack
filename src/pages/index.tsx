import Questao from 'components/Questao'
import QuestaoModel from 'model/questao'
import RespostaModal from 'model/resposta'
import { useState } from 'react'

const questaoMock = new QuestaoModel(1, 'Qual é a Melhor cor na minha opinião ? ', [
  RespostaModal.errada('Azul'),
  RespostaModal.errada('Amarelo'),
  RespostaModal.errada('Rosa'),
  RespostaModal.certa('Preto'),
  ])

export default function Home() {

  const [questao, setQuestao] = useState(questaoMock)

    function respostaFornecida (indice: number) {
      //respondendo com o inbdeice ele vai gerar uma nova questão respondida
      setQuestao(questao.responderCom(indice))
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
      respostaFornecida={respostaFornecida}
      />
    </div>
  )
}