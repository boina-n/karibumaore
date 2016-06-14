import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { KaribumaoreAppComponent } from '../app/karibumaore.component';

beforeEachProviders(() => [KaribumaoreAppComponent]);

describe('App: Karibumaore', () => {
  it('should create the app',
      inject([KaribumaoreAppComponent], (app: KaribumaoreAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'karibumaore works!\'',
      inject([KaribumaoreAppComponent], (app: KaribumaoreAppComponent) => {
    expect(app.title).toEqual('karibumaore works!');
  }));
});
