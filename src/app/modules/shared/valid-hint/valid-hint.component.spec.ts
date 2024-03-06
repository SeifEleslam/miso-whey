import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidHintComponent } from './valid-hint.component';

describe('ValidHintComponent', () => {
  let component: ValidHintComponent;
  let fixture: ComponentFixture<ValidHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidHintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
