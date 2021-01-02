import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouteDetailPage } from './route-detail.page';

describe('RouteDetailPage', () => {
  let component: RouteDetailPage;
  let fixture: ComponentFixture<RouteDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
