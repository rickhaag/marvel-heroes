import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpsearchComponent } from './httpsearch.component';

describe('HttpsearchComponent', () => {
  let component: HttpsearchComponent;
  let fixture: ComponentFixture<HttpsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
