export class Cliente {
    id: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    dataNascimento: string;
    email: string;
    senha: string;

    constructor(
        id: number,
        nome: string,
        sobrenome: string,
        cpf: string,
        dataNascimento: string,
        email: string,
        senha: string,
    ) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.senha = senha;
    }
}
