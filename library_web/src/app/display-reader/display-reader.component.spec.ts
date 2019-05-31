import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReaderComponent } from './display-reader.component';

describe('DisplayReaderComponent', () => {
  let component: DisplayReaderComponent;
  let fixture: ComponentFixture<DisplayReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
