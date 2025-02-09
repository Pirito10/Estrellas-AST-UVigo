import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusuariosComponent } from './listusuarios.component';

describe('ListestrellasComponent', () => {
  let component: ListusuariosComponent;
  let fixture: ComponentFixture<ListusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListusuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
