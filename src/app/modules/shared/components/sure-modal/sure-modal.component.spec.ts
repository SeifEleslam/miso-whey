import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SureModalComponent } from './sure-modal.component';

describe('SureModalComponent', () => {
  let component: SureModalComponent;
  let fixture: ComponentFixture<SureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SureModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
