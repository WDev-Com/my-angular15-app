import { TestBed } from '@angular/core/testing';

import { AdminAuctionService } from './admin-auction.service';

describe('AdminAuctionService', () => {
  let service: AdminAuctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
