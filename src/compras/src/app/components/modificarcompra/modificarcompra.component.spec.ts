import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecomprasComponent } from './createcompras.component';

describe('CreatecomprasComponent', () => {
  let component: CreatecomprasComponent;
  let fixture: ComponentFixture<CreatecomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecomprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
