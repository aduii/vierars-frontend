import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclableMaterialPurchaseComponent } from './recyclable-material-purchase.component';

describe('RecyclableMaterialPurchaseComponent', () => {
  let component: RecyclableMaterialPurchaseComponent;
  let fixture: ComponentFixture<RecyclableMaterialPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclableMaterialPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclableMaterialPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
