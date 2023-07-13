import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: 'I Love Angular',
      autoria: 'Dev',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'UOU',
      modelo: 'modelo1'
    }
  ]
}
