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
}
