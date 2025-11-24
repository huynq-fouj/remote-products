import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationWrapper } from './pagination-wrapper';

describe('PaginationWrapper', () => {
  let component: PaginationWrapper;
  let fixture: ComponentFixture<PaginationWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
