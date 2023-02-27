import { embaralhar } from "function/array"
import RespotaModal from "./resposta"


export default class QuestaoModel {

    #id: Number
    #enunciado: String
    #respostas: RespotaModal[]
    #acertou: boolean


    constructor(id: Number, enunciado: String, respostas: RespotaModal[], acertou: false ){

        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
        
    }

    get id(){
        return this.#id
    }

    get enunciado(){
        return this.#enunciado
    }
    
    get respostas(){
        return this.#respostas
    }

    get acertou() {
        return this.#acertou
    }

    get respondida(){
        //laço em cima de todos os arrays
        for( let resposta of this.#respostas){
            if(resposta.revelada) 
            return true
        }
            return false
    }

    responderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa
        //revelando a resposta certa e a que o usuario marcou
        const respostas = this.#respostas.map(( resposta, i ) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })
        return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
    }


    //gerando uma nova instancia para não modificar a atual
    embaralharRespostas( ): QuestaoModel {
        //gerando um novo array
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        //
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou) 
    }

    paraObject() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            acertou: this.#acertou,
            respondida: this.respondida,
            respostas: this.#respostas.map(resp => resp.paraObject()),
        }
    }
}