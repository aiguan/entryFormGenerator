import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSpanComponent } from './text-span.component';

describe('TextSpanComponent', () => {
  let component: TextSpanComponent;
  let fixture: ComponentFixture<TextSpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSpanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
