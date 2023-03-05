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

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  //inicianlizando ids com array vazio
  //usando generics para declarar um trabalho numero
  const [idsDasQuestoes, setIdsDasQuestoes]= useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)

  //acessar a api com as informações das questoes 
  async function caregarIdsDasQuestao() {
    //o await espera as promessas serem compridas
    const resp = await fetch(`${BASE_URL}/questionario`)
    //o que eu espoero receber que é a resposta coma rray de numero
    const idsDasQuestoes = await resp.json()
    console.log(idsDasQuestoes)
    setIdsDasQuestoes(idsDasQuestoes)

  }

  async function carregarQuestoes(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json
    console.log(json)
  } 

  useEffect(() => {
    caregarIdsDasQuestao()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestoes(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questao: QuestaoModel){
    
  }
   function irParaProximaQuestao() {

   }


  return (    
      <Questionario
      questao={questao}
      ultima={true}
      questaoRespondida={questaoRespondida}
      irParaProximaQuestao = {irParaProximaQuestao}
      />

  )
}