import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclableMaterialFormComponent } from './recyclable-material-form.component';

describe('RecyclableMaterialFormComponent', () => {
  let component: RecyclableMaterialFormComponent;
  let fixture: ComponentFixture<RecyclableMaterialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclableMaterialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclableMaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
