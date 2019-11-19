import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclableMaterialTableComponent } from './recyclable-material-table.component';

describe('RecyclableMaterialTableComponent', () => {
  let component: RecyclableMaterialTableComponent;
  let fixture: ComponentFixture<RecyclableMaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclableMaterialTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclableMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
