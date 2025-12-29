import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateAuctionComponent } from './create-update-auction.component';

describe('CreateUpdateAuctionComponent', () => {
  let component: CreateUpdateAuctionComponent;
  let fixture: ComponentFixture<CreateUpdateAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateAuctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
