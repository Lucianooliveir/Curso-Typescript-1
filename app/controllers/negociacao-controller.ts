import { Negociacao } from './../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
export class NegociacaoController{
    private _InputData: HTMLInputElement
    private _InputQuantidade: HTMLInputElement
    private _InputValor:HTMLInputElement
    private negociacoes = new Negociacoes()
    constructor(){
        this._InputData = document.querySelector("#data")
        this._InputQuantidade = document.querySelector("#quantidade")
        this._InputValor = document.querySelector("#valor")

    }
    adiciona() :void{
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        console.log(this.negociacoes.lista())
        this.limparFormulario()
    }
    criaNegociacao() :Negociacao{
        const exp = /-/g
        const date = new Date(this._InputData.value.replace(exp,','))
        const quantidade = parseInt(this._InputQuantidade.value)
        const valor = parseFloat(this._InputValor.value)
        return new Negociacao(date,quantidade,valor);
        
    }
    limparFormulario(): void{
        this._InputData.value = ''
        this._InputQuantidade.value = ''
        this._InputValor.value = ''
        this._InputData.focus()
    }
}