import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencasAlunoComponent } from './presencas-aluno.component';

describe('PresencasAlunoComponent', () => {
  let component: PresencasAlunoComponent;
  let fixture: ComponentFixture<PresencasAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresencasAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresencasAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
