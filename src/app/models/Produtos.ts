export class Produto {
    id: string;
    nome: string;
    imagem: string;
    preco: number;
    desconto: number;
    marca: string;
    categoria: string;
    estoque: number;

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
    }
}
