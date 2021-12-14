import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDelComponent } from './product-del.component';

describe('ProductDelComponent', () => {
  let component: ProductDelComponent;
  let fixture: ComponentFixture<ProductDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
