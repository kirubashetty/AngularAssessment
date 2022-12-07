import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferfundComponent } from './transferfund.component';

describe('TransferfundComponent', () => {
  let component: TransferfundComponent;
  let fixture: ComponentFixture<TransferfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferfundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
