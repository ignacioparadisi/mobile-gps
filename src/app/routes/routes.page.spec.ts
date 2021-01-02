import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RoutesPage } from './routes.page';

describe('RoutesPage', () => {
  let component: RoutesPage;
  let fixture: ComponentFixture<RoutesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoutesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RoutesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
