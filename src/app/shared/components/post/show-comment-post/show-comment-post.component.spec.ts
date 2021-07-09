import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCommentPostComponent } from './show-comment-post.component';

describe('ShowCommentPostComponent', () => {
  let component: ShowCommentPostComponent;
  let fixture: ComponentFixture<ShowCommentPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCommentPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCommentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
