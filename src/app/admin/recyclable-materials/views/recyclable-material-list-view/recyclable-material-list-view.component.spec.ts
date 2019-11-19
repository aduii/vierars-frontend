import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclableMaterialListViewComponent } from './recyclable-material-list-view.component';

describe('RecyclableMaterialListViewComponent', () => {
  let component: RecyclableMaterialListViewComponent;
  let fixture: ComponentFixture<RecyclableMaterialListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclableMaterialListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclableMaterialListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
