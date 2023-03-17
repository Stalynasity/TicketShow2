import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCotizacionesComponent } from './pag-cotizaciones.component';

describe('PagCotizacionesComponent', () => {
  let component: PagCotizacionesComponent;
  let fixture: ComponentFixture<PagCotizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagCotizacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
