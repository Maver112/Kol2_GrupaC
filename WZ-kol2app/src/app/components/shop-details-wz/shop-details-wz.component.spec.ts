import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsWZComponent } from './shop-details-wz.component';

describe('ShopDetailsWZComponent', () => {
  let component: ShopDetailsWZComponent;
  let fixture: ComponentFixture<ShopDetailsWZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopDetailsWZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsWZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
