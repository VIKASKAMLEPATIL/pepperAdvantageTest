import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapperAdvantageComponent } from './papper-advantage.component';

describe('PapperAdvantageComponent', () => {
  let component: PapperAdvantageComponent;
  let fixture: ComponentFixture<PapperAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapperAdvantageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapperAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
