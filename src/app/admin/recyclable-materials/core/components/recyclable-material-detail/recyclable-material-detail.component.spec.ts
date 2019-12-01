import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclableMaterialDetailComponent } from './recyclable-material-detail.component';

describe('RecyclableMaterialDetailComponent', () => {
  let component: RecyclableMaterialDetailComponent;
  let fixture: ComponentFixture<RecyclableMaterialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclableMaterialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclableMaterialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
