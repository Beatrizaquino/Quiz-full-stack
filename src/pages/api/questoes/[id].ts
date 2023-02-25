import questoes from "../bancoQuestoes"

export default (req, res) => {
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

   
}