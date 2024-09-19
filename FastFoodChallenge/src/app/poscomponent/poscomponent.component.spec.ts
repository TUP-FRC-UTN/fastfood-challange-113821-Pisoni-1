import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSComponentComponent } from './poscomponent.component';

describe('POSComponentComponent', () => {
  let component: POSComponentComponent;
  let fixture: ComponentFixture<POSComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [POSComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(POSComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
