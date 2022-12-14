import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfundComponent } from './addfund.component';

describe('AddfundComponent', () => {
  let component: AddfundComponent;
  let fixture: ComponentFixture<AddfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
