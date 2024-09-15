import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VerificarFibonacciService {
  constructor() {}

  calcularSequenciaFibonacci(numero: number): boolean {
    if (numero < 0) return false;

    if (numero === 0 || numero === 1) return true;

    let primeiroValor = 0;
    let segundoValor = 1;
    let proximoNumero = primeiroValor + segundoValor;

    while (proximoNumero <= numero) {
      if (proximoNumero === numero) return true;

      primeiroValor = segundoValor;
      segundoValor = proximoNumero;
      proximoNumero = primeiroValor + segundoValor;
    }

    return false;
  }
}
