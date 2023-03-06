import { embaralhar } from "function/array"
import questoes from "../bancoQuestoes"

export default(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any[]): void; new(): any } } }) => {

    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}