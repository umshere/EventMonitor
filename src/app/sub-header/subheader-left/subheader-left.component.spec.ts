import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheaderLeftComponent } from './subheader-left.component';

describe('SubheaderLeftComponent', () => {
  let component: SubheaderLeftComponent;
  let fixture: ComponentFixture<SubheaderLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheaderLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheaderLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
