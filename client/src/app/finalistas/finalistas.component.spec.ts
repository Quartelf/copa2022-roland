import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalistasComponent } from './finalistas.component';

describe('FinalistasComponent', () => {
  let component: FinalistasComponent;
  let fixture: ComponentFixture<FinalistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
