import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperTestimonyComponent } from './swiper-testimony.component';

describe('SwiperTestimonyComponent', () => {
  let component: SwiperTestimonyComponent;
  let fixture: ComponentFixture<SwiperTestimonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperTestimonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
