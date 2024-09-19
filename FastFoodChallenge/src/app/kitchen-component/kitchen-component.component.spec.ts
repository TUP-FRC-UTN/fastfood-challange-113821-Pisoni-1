import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenComponentComponent } from './kitchen-component.component';

describe('KitchenComponentComponent', () => {
  let component: KitchenComponentComponent;
  let fixture: ComponentFixture<KitchenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
