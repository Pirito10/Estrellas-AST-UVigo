import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateestrellasComponent } from './createestrellas.component';

describe('CreateestrellasComponent', () => {
  let component: CreateestrellasComponent;
  let fixture: ComponentFixture<CreateestrellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateestrellasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateestrellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
