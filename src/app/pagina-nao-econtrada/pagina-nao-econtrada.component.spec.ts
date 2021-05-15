import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNaoEcontradaComponent } from './pagina-nao-econtrada.component';

describe('PaginaNaoEcontradaComponent', () => {
  let component: PaginaNaoEcontradaComponent;
  let fixture: ComponentFixture<PaginaNaoEcontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNaoEcontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNaoEcontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
