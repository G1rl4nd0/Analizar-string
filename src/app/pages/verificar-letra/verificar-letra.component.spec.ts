import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarNumeroComponent } from './verificar-letra.component';

describe('VerificarNumeroComponent', () => {
  let component: VerificarNumeroComponent;
  let fixture: ComponentFixture<VerificarNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarNumeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
