import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltPresencasComponent } from './alt-presencas.component';

describe('AltPresencasComponent', () => {
  let component: AltPresencasComponent;
  let fixture: ComponentFixture<AltPresencasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltPresencasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltPresencasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
