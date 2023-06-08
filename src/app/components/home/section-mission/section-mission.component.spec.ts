import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMissionComponent } from './section-mission.component';

describe('SectionMissionComponent', () => {
  let component: SectionMissionComponent;
  let fixture: ComponentFixture<SectionMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
