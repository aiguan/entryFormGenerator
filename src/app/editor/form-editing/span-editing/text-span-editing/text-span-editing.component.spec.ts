import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSpanEditingComponent } from './text-span-editing.component';

describe('TextSpanEditingComponent', () => {
  let component: TextSpanEditingComponent;
  let fixture: ComponentFixture<TextSpanEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSpanEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSpanEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
