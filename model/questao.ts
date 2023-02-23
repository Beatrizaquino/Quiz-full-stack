import RespotaModal from "./resposta"


export default class QuestaoModel {

    #id: Number
    #enunciado: String
    #respostas: RespotaModal[]
    #acertou: boolean


    constructor(id: Number, enunciado: String, respostas: RespotaModal[], acertou: boolean ){

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
    
    get resposta(){
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
}