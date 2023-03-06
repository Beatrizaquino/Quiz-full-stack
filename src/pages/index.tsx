import QuestaoModel from '../../model/questao'
import { useEffect, useRef, useState } from 'react'
import Questionario from 'components/Questionario'
import { useRouter } from 'next/router'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const router = useRouter()

  //inicianlizando ids com array vazio
  //usando generics para declarar um trabalho numero
  const [idsDasQuestoes, setIdsDasQuestoes]= useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  //controlar as respostas certas
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  //acessar a api com as informações das questoes 
  async function caregarIdsDasQuestao() {
    //o await espera as promessas serem compridas
    const resp = await fetch(`${BASE_URL}/questionario`)
    //o que eu espoero receber que é a resposta coma rray de numero
    const idsDasQuestoes = await resp.json()
    
    setIdsDasQuestoes(idsDasQuestoes)

  }

  async function carregarQuestoes(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json) 
    setQuestao(novaQuestao)
  } 

  useEffect(() => {
    caregarIdsDasQuestao()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestoes(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel){
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0)) 
  }

  //obter o proximo id
  function idProximaPergunta() {
    if(questao) {
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoIndice]
    } 
    
  }

   function irParaProximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? irParaProximaQuestao(proximoId): finalizar()

   }

   function irParaProximaQuestao(proximoId: number ) {
       carregarQuestoes(proximoId)
   }

   function finalizar() {
    router.push({
      pathname: "/resultado",
      query:{
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
   }


  return (    
      <Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irParaProximoPasso={irParaProximoPasso}
      />

  )
}