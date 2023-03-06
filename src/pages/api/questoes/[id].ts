/* import questoes from "../bancoQuestoes"

export default function (req, res) => {
    //obtendo valor do id
    const idSelecionado = +req.query.id
    //filtrando as questões que temos interesse
   const unicaQuestao = questoes.filter(questoes => questoes.id === idSelecionado)
   //verificanod o tamanho do array para saber se ele foi retornado
   //gerando uma instancia e transoformando em um object
   if(unicaQuestao.length === 1) {
        const questaoselecionada = unicaQuestao[0].embaralharRespostas()
        res.status(200).json(questaoselecionada.paraObject())
    } else {
        res.status(204).send()
    }

   
} */

import questoes from '../bancoQuestoes'

export default function questoesProId(req: { query: { id: string | number } }, res: {
        status: (arg0: number) => {
            (): any; new(): any; json: {
                (arg0: {
                    id: Number; enunciado //obtendo valor do id
                        : String; acertou: boolean; respondida: boolean; respostas: {
                            valor //filtrando as questões que temos interesse
                            : string; certa: boolean; revelada: boolean
                        }[]
                }): void; new(): any
            }; send: { (): void; new(): any }
        }
    }) {
    const idSelecionado = +req.query.id

    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if(unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.paraObject())
    } else {
        res.status(204).send()
    }
}


