import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecyclableMaterialViewComponent } from './edit-recyclable-material-view.component';

describe('EditRecyclableMaterialViewComponent', () => {
  let component: EditRecyclableMaterialViewComponent;
  let fixture: ComponentFixture<EditRecyclableMaterialViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecyclableMaterialViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecyclableMaterialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
