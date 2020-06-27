import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsManageComponent } from './docs-manage.component';

describe('DocsManageComponent', () => {
  let component: DocsManageComponent;
  let fixture: ComponentFixture<DocsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
