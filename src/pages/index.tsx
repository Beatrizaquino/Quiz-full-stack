import Questao from 'components/Questao'
import QuestaoModel from 'model/questao'
import RespostaModal from 'model/resposta'


export default function Home() {

  const questaoTeste = new QuestaoModel(1, ' Melhor cor ? ', [
    RespostaModal.errada('Azul'),
    RespostaModal.errada('Amarelo'),
    RespostaModal.errada('Rosa'),
    RespostaModal.certa('Preto'),
    ])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>    
      <Questao valor={questaoTeste} />
    </div>
  )
}