

export default class RespostaModal {
    
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor( valor: string, certa: boolean, revelada: false) {

        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    //utilizando metodo static dentro de uma classe, pois são funções que não dependem de nem uma variavel de instância

    static certa(valor: string){
        return new RespostaModal(valor, true)
    }

    static errada(valor: string) {
        return new RespostaModal(valor, false)
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
}