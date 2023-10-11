import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneClientComponent } from './one-client.component';

describe('OneClientComponent', () => {
  let component: OneClientComponent;
  let fixture: ComponentFixture<OneClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneClientComponent]
    });
    fixture = TestBed.createComponent(OneClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
