import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCursosComponent } from './servico-cursos.component';

describe('ServicoCursosComponent', () => {
  let component: ServicoCursosComponent;
  let fixture: ComponentFixture<ServicoCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
