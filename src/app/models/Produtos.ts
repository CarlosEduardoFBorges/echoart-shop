export class Produto {
    id: string;
    nome: string;
    imagem: string;
    preco: number;
    desconto: number;
    marca: string;
    categoria: string;
    estoque: number;
    valorDesconto: number;
    totalFinal: number;

    constructor(
        id: string,
        nome: string,
        imagem: string,
        preco: number,
        desconto: number,
        marca: string,
        categoria: string,
        estoque: number
    ) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.preco = preco;
        this.desconto = desconto;
        this.marca = marca;
        this.categoria = categoria;
        this.estoque = estoque;
        this.valorDesconto = this.preco * this.desconto;
        this.totalFinal = this.preco - this.valorDesconto;
    }
}
