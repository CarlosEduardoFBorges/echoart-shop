import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../../models/cliente';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';

@Component({
    imports: [FormsModule, RouterLink],
    selector: 'app-gestao-clientes',
    styleUrl: './gestao-clientes.css',
    templateUrl: './gestao-clientes.html',
})
export default class GestaoClientes implements OnInit {

    private service = inject(ClienteService);
    listaClientes: Cliente[] = [];


    ngOnInit(): void {
        // this.listaClientes = this.service.listar();
    }
    // botoes .html (alterar pro marco 2)
    onBotaoClicado() {
        alert('Botão clicado!');
    }
}
