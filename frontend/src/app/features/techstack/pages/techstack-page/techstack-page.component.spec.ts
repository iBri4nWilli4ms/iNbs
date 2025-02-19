import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstackPageComponent } from './techstack-page.component';

describe('TechstackPageComponent', () => {
  let component: TechstackPageComponent;
  let fixture: ComponentFixture<TechstackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechstackPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechstackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
