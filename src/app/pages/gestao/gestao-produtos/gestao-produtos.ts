import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../models/Produtos';
import { Router } from '@angular/router';


@Component({
    imports: [RouterLink],
    selector: 'app-gestao-produtos',
    styleUrl: './gestao-produtos.css',
    templateUrl: './gestao-produtos.html',
})
export class GestaoProdutos {

    private service = inject(ProdutoService);
    // pra corrigir o erro chato de não atualizar o @for do html quando carrega a página:
    private cdr = inject(ChangeDetectorRef);
    private router = inject(Router);

    listaProdutos: Produto[] = [];

    ngOnInit(): void {
        this.service.listar().subscribe({
            next: (produtos) => {
                console.log('Produtos recebidos:', produtos);

                this.listaProdutos = produtos;
                this.cdr.markForCheck();

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
                    this.router.navigate(['/gestao/manutencao-produtos']);
                }
            });
        }
    }
}
