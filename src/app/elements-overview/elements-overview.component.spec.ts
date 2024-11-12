import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsOverviewComponent } from './elements-overview.component';

describe('ElementsOverviewComponent', () => {
  let component: ElementsOverviewComponent;
  let fixture: ComponentFixture<ElementsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
