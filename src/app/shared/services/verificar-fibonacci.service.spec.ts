/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerificarFibonacciService } from './verificar-fibonacci.service';

describe('Service: VerificarFibonacci', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificarFibonacciService]
    });
  });

  it('should ...', inject([VerificarFibonacciService], (service: VerificarFibonacciService) => {
    expect(service).toBeTruthy();
  }));
});
