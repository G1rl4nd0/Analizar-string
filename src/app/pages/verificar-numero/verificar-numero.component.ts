import { Component, OnInit } from '@angular/core';
import { VerificarFibonacciService } from 'src/app/shared/services/verificar-fibonacci.service';

@Component({
  selector: 'app-verificar-numero',
  templateUrl: './verificar-numero.component.html',
  styleUrls: ['./verificar-numero.component.scss'],
})
export class VerificarNumeroComponent implements OnInit {
  numero: number | null = null;
  resultado: string = '';

  constructor(private verificarFibonacciService: VerificarFibonacciService) {}

  verificarNumero() {
    if (this.numero !== null) {
      const pertence =
        this.verificarFibonacciService.calcularSequenciaFibonacci(this.numero);
      this.resultado = pertence
        ? `O número ${this.numero} pertence à sequência de Fibonacci.`
        : `O número ${this.numero} não pertence à sequência de Fibonacci.`;
    }
  }

  ngOnInit(): void {}
}
