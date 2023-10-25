import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHotelDialogComponent } from './delete-hotel-dialog.component';

describe('DeleteHotelDialogComponent', () => {
  let component: DeleteHotelDialogComponent;
  let fixture: ComponentFixture<DeleteHotelDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteHotelDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteHotelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
