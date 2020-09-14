import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvtoolComponent } from './ivtool.component';

describe('IvtoolComponent', () => {
  let component: IvtoolComponent;
  let fixture: ComponentFixture<IvtoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvtoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
