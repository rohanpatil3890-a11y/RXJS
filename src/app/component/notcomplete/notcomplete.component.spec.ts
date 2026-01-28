import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotcompleteComponent } from './notcomplete.component';

describe('NotcompleteComponent', () => {
  let component: NotcompleteComponent;
  let fixture: ComponentFixture<NotcompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotcompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
