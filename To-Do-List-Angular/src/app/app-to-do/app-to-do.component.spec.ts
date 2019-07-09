import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToDoComponent } from './app-to-do.component';

describe('AppToDoComponent', () => {
  let component: AppToDoComponent;
  let fixture: ComponentFixture<AppToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
