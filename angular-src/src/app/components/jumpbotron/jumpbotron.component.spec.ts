import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpbotronComponent } from './jumpbotron.component';

describe('JumpbotronComponent', () => {
  let component: JumpbotronComponent;
  let fixture: ComponentFixture<JumpbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
