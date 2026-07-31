import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceEditingComponent } from './price-editing.component';

describe('PriceEditingComponent', () => {
  let component: PriceEditingComponent;
  let fixture: ComponentFixture<PriceEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
