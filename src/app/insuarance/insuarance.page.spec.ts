import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsuarancePage } from './insuarance.page';

describe('InsuarancePage', () => {
  let component: InsuarancePage;
  let fixture: ComponentFixture<InsuarancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuarancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsuarancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
