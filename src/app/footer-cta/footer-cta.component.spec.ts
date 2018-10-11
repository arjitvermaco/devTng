import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCtaComponent } from './footer-cta.component';

describe('FooterCtaComponent', () => {
  let component: FooterCtaComponent;
  let fixture: ComponentFixture<FooterCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
