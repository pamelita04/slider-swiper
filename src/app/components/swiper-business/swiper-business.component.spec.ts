import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperBusinessComponent } from './swiper-business.component';

describe('SwiperBusinessComponent', () => {
  let component: SwiperBusinessComponent;
  let fixture: ComponentFixture<SwiperBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
