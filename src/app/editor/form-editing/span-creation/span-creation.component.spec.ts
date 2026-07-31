import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanCreationComponent } from './span-creation.component';

describe('ParagraphCreationComponent', () => {
  let component: SpanCreationComponent;
  let fixture: ComponentFixture<SpanCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpanCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
