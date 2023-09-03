import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemasTableComponent } from './cinemas-table.component';

describe('CinemasTableComponent', () => {
  let component: CinemasTableComponent;
  let fixture: ComponentFixture<CinemasTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinemasTableComponent]
    });
    fixture = TestBed.createComponent(CinemasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
