import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ViaCep } from 'src/app/models/via-cep';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent{

  novoCliente: Cliente = new Cliente();

  viaCep: ViaCep = new ViaCep();
  cepBusca: string = '';

  mostrarAlerta: boolean = false; 
  
  constructor(private clienteService: ClienteService) { }

  
  adicionarCliente(clienteForm: NgForm): void {

    if (this.camposObrigatoriosPreenchidos()) {
      this.clienteService.addCliente(this.novoCliente);

      alert('Cliente criado com sucesso!');
    }else {

      this.mostrarAlerta = true;
    }
  
  }

  buscarCEP(cep: string){
    this.viaCep.getCepData(cep).subscribe((data: any) => {
      this.novoCliente.cep = cep;
      this.novoCliente.endereco = data.logradouro;
      this.novoCliente.bairro = data.bairro;
      this.novoCliente.cidade = data.localidade;
    });
  }

  camposObrigatoriosPreenchidos(): boolean {
    return !!this.novoCliente.tipoPessoa && !!this.novoCliente.nome && !!this.novoCliente.email && !!this.novoCliente.numero;
  }

}
