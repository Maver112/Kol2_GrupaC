import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemWZComponent } from './shop-item-wz.component';

describe('ShopItemWZComponent', () => {
  let component: ShopItemWZComponent;
  let fixture: ComponentFixture<ShopItemWZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopItemWZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemWZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
