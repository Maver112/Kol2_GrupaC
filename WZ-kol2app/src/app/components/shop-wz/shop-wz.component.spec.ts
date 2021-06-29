import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopWZComponent } from './shop-wz.component';

describe('ShopWZComponent', () => {
  let component: ShopWZComponent;
  let fixture: ComponentFixture<ShopWZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopWZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopWZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
