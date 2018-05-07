import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAcessosComponent } from './criar-acessos.component';

describe('CriarAcessosComponent', () => {
  let component: CriarAcessosComponent;
  let fixture: ComponentFixture<CriarAcessosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarAcessosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
