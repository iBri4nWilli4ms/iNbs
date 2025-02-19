import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMinimalPageComponent } from './about-minimal-page.component';

describe('AboutMinimalPageComponent', () => {
  let component: AboutMinimalPageComponent;
  let fixture: ComponentFixture<AboutMinimalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMinimalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMinimalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
