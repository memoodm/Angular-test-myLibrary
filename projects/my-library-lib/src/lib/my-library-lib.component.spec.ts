import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibraryLibComponent } from './my-library-lib.component';

describe('MyLibraryLibComponent', () => {
  let component: MyLibraryLibComponent;
  let fixture: ComponentFixture<MyLibraryLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibraryLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibraryLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
