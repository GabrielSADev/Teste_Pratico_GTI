import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {


  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clientes = this.clienteService.getAllClientes();
  }

  excluirCliente(id: number): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.clienteService.deleteCliente(id);
      alert('CLIENTE DELETADO!!!');
      this.clientes = this.clienteService.getAllClientes();
    }
  }

}
