import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaBrasileiraoComponent } from './tabela-brasileirao.component';

describe('TabelaBrasileiraoComponent', () => {
  let component: TabelaBrasileiraoComponent;
  let fixture: ComponentFixture<TabelaBrasileiraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaBrasileiraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaBrasileiraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
