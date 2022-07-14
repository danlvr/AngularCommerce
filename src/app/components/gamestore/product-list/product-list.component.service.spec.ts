import { TestBed } from '@angular/core/testing';

import { GameService } from './product-list.component.service';

describe('ProductList.ComponentService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
