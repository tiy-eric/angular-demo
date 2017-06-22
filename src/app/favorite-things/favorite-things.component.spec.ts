import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteThingsComponent } from './favorite-things.component';

describe('FavoriteThingsComponent', () => {
  let component: FavoriteThingsComponent;
  let fixture: ComponentFixture<FavoriteThingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteThingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
