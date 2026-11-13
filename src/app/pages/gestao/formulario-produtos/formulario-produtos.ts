import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../models/Produtos';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
    selector: 'app-formulario-produtos',
    styleUrl: './formulario-produtos.css',
    templateUrl: './formulario-produtos.html',
})
export class FormularioProdutos implements OnInit {
    produto: Produto = {} as Produto;
    private service = inject(ProdutoService);
    private router = inject(Router);

    private route = inject(ActivatedRoute);
    produtoId: string | null = this.route.snapshot.paramMap.get('id');

    ngOnInit() {
        if (this.produtoId) {
            this.service.buscarPorID(this.produtoId).subscribe({
                next: (produto) => this.produto = produto,
                error: () => alert('Produto não encontrado.')
            })
        }
    }

    salvar() {
        if (this.produtoId) {
            this.service.editar(this.produto).subscribe({
                next: (produto) => {
                    this.produto = produto;
                    this.router.navigate(['/manutencao-produtos']);
                },
                error: () => alert('Erro ao alterar produto.')
            });
        } else {
            this.service.incluir(this.produto).subscribe({
                next: (produto) => {
                    this.produto = produto;
                    alert(`Produto ${this.produto.nome} foi cadastrado com sucesso.`);
                    this.router.navigate(['/manutencao-produtos'])
                }
            })
        }
    }

}
