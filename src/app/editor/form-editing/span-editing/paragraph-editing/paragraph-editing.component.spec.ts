import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphEditingComponent } from './paragraph-editing.component';

describe('ParagraphEditingComponent', () => {
  let component: ParagraphEditingComponent;
  let fixture: ComponentFixture<ParagraphEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
