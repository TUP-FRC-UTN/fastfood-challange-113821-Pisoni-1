import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoComponentComponent } from './resto-component.component';

describe('RestoComponentComponent', () => {
  let component: RestoComponentComponent;
  let fixture: ComponentFixture<RestoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
