import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseCrudComponent } from './firebase-crud.component';

describe('FirebaseCrudComponent', () => {
  let component: FirebaseCrudComponent;
  let fixture: ComponentFixture<FirebaseCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseCrudComponent]
    });
    fixture = TestBed.createComponent(FirebaseCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
