import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItemListComponent } from './sidebar-item-list.component';

describe('SidebarItemListComponent', () => {
  let component: SidebarItemListComponent;
  let fixture: ComponentFixture<SidebarItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
