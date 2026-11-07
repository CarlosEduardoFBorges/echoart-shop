import { Component } from '@angular/core';
import { Produto } from '../../../models/produtos';

@Component({
    imports: [],
    selector: 'app-manutencao-produtos',
    styleUrl: './manutencao-produtos.css',
    templateUrl: './manutencao-produtos.html',
})
export class ManutencaoProdutos {
    onBotaoClicado() {
        alert('Botão funcionando!');
    }

    calcularValorDesconto(preco: number, desconto: number): number {
        return preco * desconto;
    }

    calcularTotal(preco: number, desconto: number): number {
        return preco - this.calcularValorDesconto(preco, desconto);
    }

    // pra aparecer os nome no for do .html
    // listaProdutos: Produto[] = [
    //     {
    //         id: 1,
    //         nome: 'Violão Acústico ',
    //         imagem: '',
    //         preco: 1349,
    //         desconto: 0.2,
    //         marca: 'Genérica',
    //         estoque: 13,
    //         categoria: '',
    //         valorDesconto: 1349 * 0.2,
    //         totalFinal: 1349 - 1349 * 0.2,
    //     },
    //     {
    //         id: 1,
    //         nome: 'Bateria Acústico',
    //         imagem: '',
    //         preco: 4890,
    //         desconto: 0,
    //         marca: 'Genérica',
    //         categoria: '',
    //         estoque: 1,
    //         valorDesconto: 4890 * 0,
    //         totalFinal: 4890 - 4890 * 0,
    //     },
    //     {
    //         id: 1,
    //         nome: 'Teclado Digital 61 Teclas',
    //         imagem: '',
    //         preco: 1701,
    //         desconto: 0.1,
    //         marca: 'Genérica',
    //         categoria: '',
    //         estoque: 50,
    //         valorDesconto: 1701 * 0.1,
    //         totalFinal: 1701 - 1701 * 0.1,
    //     },
    //     {
    //         id: 1,
    //         nome: 'Fone de Ouvido Studio',
    //         imagem: '',
    //         preco: 390,
    //         desconto: 0.15,
    //         marca: 'Genérica',
    //         categoria: '',
    //         estoque: 110,
    //         valorDesconto: 390 * 0.15,
    //         totalFinal: 390 - 390 * 0.15,
    //     },
    // ];
}
