import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHtmlComponent } from './widget-edit.component';

describe('WidgetEditComponent', () => {
  let component: WidgetHtmlComponent;
  let fixture: ComponentFixture<WidgetHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
