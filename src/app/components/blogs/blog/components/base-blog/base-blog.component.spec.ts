import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBlogComponent } from './base-blog.component';

describe('BaseBlogComponent', () => {
  let component: BaseBlogComponent;
  let fixture: ComponentFixture<BaseBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
