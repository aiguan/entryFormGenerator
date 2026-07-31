import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSpanEditingComponent } from './image-span-editing.component';

describe('ImageSpanEditingComponent', () => {
  let component: ImageSpanEditingComponent;
  let fixture: ComponentFixture<ImageSpanEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSpanEditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSpanEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
