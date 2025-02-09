import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListestrellasComponent } from './listestrellas.component';

describe('ListestrellasComponent', () => {
  let component: ListestrellasComponent;
  let fixture: ComponentFixture<ListestrellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListestrellasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListestrellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
