import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustRegexComponent } from './cust-regex.component';

describe('CustRegexComponent', () => {
  let component: CustRegexComponent;
  let fixture: ComponentFixture<CustRegexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustRegexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustRegexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
