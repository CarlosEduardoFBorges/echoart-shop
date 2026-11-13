import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../models/Produtos';

@Component({
    imports: [RouterLink],
    selector: 'app-manutencao-produtos',
    styleUrl: './manutencao-produtos.css',
    templateUrl: './manutencao-produtos.html',
})
export class ManutencaoProdutos {

    private service = inject(ProdutoService);

    listaProdutos: Produto[] = [];

    ngOnInit(): void {
        this.service.listar().subscribe({
            next: (produtos) => {
                console.log('Produtos recebidos:', produtos);

                this.listaProdutos = produtos;

                console.log('Lista atribuída:', this.listaProdutos);
            },
            error: (erro) => {
                console.error('Erro ao carregar produtos:', erro);
            }
        });
    }

    editar(id: string) {
        console.log('Editar produto: ', id);
    }

    excluir(id: string) {

        if (id !== undefined && confirm('Confirme se deseja mesmo excluir o produto.')) {
            this.service.excluir(id).subscribe({
                next: () => {

                    this.listaProdutos = this.listaProdutos.filter(produto => produto.id !== id);
                }
            });
        }
    }
}
