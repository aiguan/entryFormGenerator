import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanEditingComponent } from './span-editing.component';

describe('ParagraphEditingComponent', () => {
  let component: SpanEditingComponent;
  let fixture: ComponentFixture<SpanEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpanEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
