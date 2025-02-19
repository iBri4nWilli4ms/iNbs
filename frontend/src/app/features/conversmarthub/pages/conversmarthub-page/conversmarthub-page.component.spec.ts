import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversmarthubPageComponent } from './conversmarthub-page.component';

describe('ConversmarthubPageComponent', () => {
  let component: ConversmarthubPageComponent;
  let fixture: ComponentFixture<ConversmarthubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversmarthubPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversmarthubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
