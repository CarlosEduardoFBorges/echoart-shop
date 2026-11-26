import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http'; // permite fazer chamadas http
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class ClienteService {

    private readonly API = 'http://localhost:3000/clientes'

    constructor(private http: HttpClient) { }

    listar(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.API);
     }
    
    incluir(cliente: Cliente): Observable<Cliente> {
            console.log(`Enviando cliente ${cliente} para inclusão.`);
            return this.http.post<Cliente>(this.API, cliente);
        }
    
        // de todos, único que não retorna valor (void)
    excluir(id: string): Observable<void> {
            return this.http.delete<void>(`${this.API}/${id}`)
        }
    
    buscarPorID(id: string): Observable<Cliente> {
            return this.http.get<Cliente>(`${this.API}/${id}`)
        }
    
    editar(cliente
            : Cliente): Observable<Cliente> {
            return this.http.put<Cliente>(`${this.API}/${cliente.id}`, cliente)
        }
    
    }
