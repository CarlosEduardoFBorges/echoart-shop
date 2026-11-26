import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-gestao-clientes',
  styleUrl: './gestao-clientes.css',
  templateUrl: './gestao-clientes.html',
})
export class GestaoClientes implements OnInit {
  private service = inject(ClienteService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  listaClientes: Cliente[] = [];

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.service.listar().subscribe({
      next: (clientes) => {
        this.listaClientes = clientes;
        this.cdr.markForCheck();
      },
      error: (erro) => {
        console.error('Erro ao carregar clientes:', erro);
      }
    });
  }

  editar(id: string | undefined): void {
    if (id) {
      this.router.navigate(['/gestao/formulario-clientes', id]);
    }
  }

  excluir(id: string | undefined): void {
    if (id !== undefined && confirm('Confirme se deseja mesmo excluir o cliente?')) {
      this.service.excluir(id).subscribe({
        next: () => {
          this.listaClientes = this.listaClientes.filter(cliente => cliente.id !== id);
          this.cdr.markForCheck();
        },
        error: (erro) => {
          console.error('Erro ao excluir cliente:', erro);
        }
      });
    }
  }
}