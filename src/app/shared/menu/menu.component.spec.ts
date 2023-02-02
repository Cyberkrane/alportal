import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as titulo1 'gallery'`, () => {
    const app = fixture.componentInstance;
    expect(app.titulo1).toEqual('gallery');
  });

  it(`should have as titulo2 'mockups'`, () => {
    const app = fixture.componentInstance;
    expect(app.titulo2).toEqual('mockups');
  });

  it(`should have as titulo3 'reels'`, () => {
    const app = fixture.componentInstance;
    expect(app.titulo3).toEqual('reels');
  });

  it(`should have as titulo4 'my profile'`, () => {
    const app = fixture.componentInstance;
    expect(app.titulo4).toEqual('my profile');
  });

});
