import QuestaoModel from '../../../model/questao';
import RespostaModal from '../../../model/resposta';


const questoes: QuestaoModel[] = [

    new QuestaoModel(306, 'Qual é o bicho que transmite a doença de chargas?', [

        RespostaModal.errada('Abelha'),
        RespostaModal.errada('Aranha'),
        RespostaModal.errada('Barata'),
        RespostaModal.errada('Pulga'),
        RespostaModal.certa('Barbeiro')

])

]

export default questoes 