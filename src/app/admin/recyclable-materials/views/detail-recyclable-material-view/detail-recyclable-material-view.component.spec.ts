import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecyclableMaterialViewComponent } from './detail-recyclable-material-view.component';

describe('DetailRecyclableMaterialViewComponent', () => {
  let component: DetailRecyclableMaterialViewComponent;
  let fixture: ComponentFixture<DetailRecyclableMaterialViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRecyclableMaterialViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecyclableMaterialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
