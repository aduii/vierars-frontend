import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurchaseViewComponent } from './edit-purchase-view.component';

describe('EditPurchaseViewComponent', () => {
  let component: EditPurchaseViewComponent;
  let fixture: ComponentFixture<EditPurchaseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPurchaseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPurchaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
