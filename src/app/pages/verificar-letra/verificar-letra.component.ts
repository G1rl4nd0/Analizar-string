import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verificar-letra',
  templateUrl: './verificar-letra.component.html',
  styleUrls: ['./verificar-letra.component.scss'],
})
export class VerificarLetraComponent implements OnInit {
  texto: string = ''; // String de entrada
  quantidade: number = 0; // Contador para a letra 'a'
  existeLetraA: boolean = false; // Flag para verificar a existência
  mostrarMensagem: boolean = false; // Flag para controlar a exibição da mensagem

  ngOnInit(): void {}

  verificarLetra() {
    // Verifica a existência da letra 'a' (maiúscula e minúscula)
    const regex = /a/gi; // Regex que procura 'a' e 'A'
    const matches = this.texto.match(regex);

    this.quantidade = matches ? matches.length : 0; // Conta as ocorrências
    this.existeLetraA = this.quantidade > 0; // Verifica se existe
    this.mostrarMensagem = true; // Ativa a exibição da mensagem
  }
}
