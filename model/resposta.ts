

export default class RespostaModel {
    
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor( valor: string, certa: boolean, revelada = false) {

        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    //utilizando metodo static dentro de uma classe, pois são funções que não dependem de nem uma variavel de instância

    static certa(valor: string){
        return new RespostaModel(valor, true)
    }

    static errada(valor: string) {
        return new RespostaModel(valor, false)
    }

    get valor() {
        return this.#valor
    }

    get certa() {
        return this.#certa
    }

    get revelada() {
        return this.#revelada
    }

    //criandno metodo para revelar sempre como true a resposta correta
    revelar(){
        return new RespostaModel(this.#valor, this.#certa, true)
    }

    static criarUsandoObjeto(obj: RespostaModel): RespostaModel {
        return new RespostaModel(obj.valor, obj.certa, obj.revelada)
    }

    paraObject(){
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }
}