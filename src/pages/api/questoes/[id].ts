
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


