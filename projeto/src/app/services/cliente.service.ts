import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor( private router: Router) { }

  private readonly localStorageKey = 'clientes';

    getAllClientes(): Cliente[] {
      const clientesData = localStorage.getItem(this.localStorageKey);
      return clientesData ? JSON.parse(clientesData) : [];
    }
  
    addCliente(cliente: Cliente): void {
      let clientes = this.getAllClientes();
      if (!cliente.id) {
        cliente.id = this.generateUniqueId(clientes);
      }
      clientes.push(cliente);
      localStorage.setItem(this.localStorageKey, JSON.stringify(clientes));
  
      console.log(`Cliente adicionado com sucesso: ${cliente.nome}`);
      
      this.router.navigate(['/']);
    }
  
  
    deleteCliente(id: number): void {
      let clientes = this.getAllClientes();
      clientes = clientes.filter(c => c.id !== id);
      localStorage.setItem(this.localStorageKey, JSON.stringify(clientes));
    }
  
    private generateUniqueId(clientes: Cliente[]): number {
      return clientes.length > 0 ? Math.max(...clientes.map(cliente => cliente.id)) + 1 : 1;
    }
}
