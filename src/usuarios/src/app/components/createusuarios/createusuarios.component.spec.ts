import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateusuariosComponent } from './createusuarios.component';

describe('CreateusuariosComponent', () => {
  let component: CreateusuariosComponent;
  let fixture: ComponentFixture<CreateusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateusuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
