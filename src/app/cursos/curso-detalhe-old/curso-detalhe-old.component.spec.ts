import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalheOldComponent } from './curso-detalhe-old.component';

describe('CursoDetalheComponent', () => {
  let component: CursoDetalheOldComponent;
  let fixture: ComponentFixture<CursoDetalheOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoDetalheOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalheOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
