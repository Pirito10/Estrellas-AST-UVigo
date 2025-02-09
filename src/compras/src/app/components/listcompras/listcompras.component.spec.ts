import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomprasComponent } from './listcompras.component';

describe('ListcomprasComponent', () => {
  let component: ListcomprasComponent;
  let fixture: ComponentFixture<ListcomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcomprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
