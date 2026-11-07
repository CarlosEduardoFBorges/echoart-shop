export class Produto {
    id: number;
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
        id: number,
        nome: string,
        imagem: string,
        preco: number,
        desconto: number,
        marca: string,
        categoria: string,
        estoque: number,
        valorDesconto: number,
        totalFinal: number,
    ) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.preco = preco;
        this.desconto = desconto;
        this.marca = marca;
        this.categoria = categoria;
        this.estoque = estoque;
        this.valorDesconto = preco * desconto;
        this.totalFinal = preco - valorDesconto;
    }
}
