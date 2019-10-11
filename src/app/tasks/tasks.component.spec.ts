import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../data.service'; 
import { of } from 'rxjs';

import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksComponent ],
      providers: [
        {
          provide: DataService,
          useValue: {
            getLabels: ()=> of([
              {
                "id": "b_v_g1zs9H7WLYb4gwQxV",
                "title": "Work",
                "color": "#7B37EB"
              },
              {
                "id": "0fKNRcpNI5S0WKLin910B",
                "title": "Home",
                "color": "#640DF3"
              },
              {
                "id": "eurn-L1Rw_8QjgARn1RJ-",
                "title": "Other",
                "color": "#4E02CC"
              }
            ])


          }
        }

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('fetch labels should work properly', () => {
  //   component.fetchLabels();
  //   expect(component.labelList).toEqual([
  //     {
  //       "id": "b_v_g1zs9H7WLYb4gwQxV",
  //       "title": "Work",
  //       "color": "#7B37EB"
  //     },
  //     {
  //       "id": "0fKNRcpNI5S0WKLin910B",
  //       "title": "Home",
  //       "color": "#640DF3"
  //     },
  //     {
  //       "id": "eurn-L1Rw_8QjgARn1RJ-",
  //       "title": "Other",
  //       "color": "#4E02CC"
  //     }
  //   ])
  // })
});
