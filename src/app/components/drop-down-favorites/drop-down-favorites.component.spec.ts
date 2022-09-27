import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownFavoritesComponent } from './drop-down-favorites.component';

describe('DropDownFavoritesComponent', () => {
  let component: DropDownFavoritesComponent;
  let fixture: ComponentFixture<DropDownFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownFavoritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
