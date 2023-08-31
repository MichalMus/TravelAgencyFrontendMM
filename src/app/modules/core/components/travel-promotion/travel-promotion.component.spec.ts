import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPromotionComponent } from './travel-promotion.component';

describe('TravelPromotionComponent', () => {
  let component: TravelPromotionComponent;
  let fixture: ComponentFixture<TravelPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelPromotionComponent],
    });
    fixture = TestBed.createComponent(TravelPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
