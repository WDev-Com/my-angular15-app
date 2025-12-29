import { Component, OnInit } from '@angular/core';
import { Bid } from '../../models/bid.model';

@Component({
  selector: 'app-view-bids',
  templateUrl: './view-bids.component.html',
  styleUrls: ['./view-bids.component.css']
})
export class ViewBidsComponent implements OnInit {

  role: 'ADMIN' | 'USER' = 'USER'; // change dynamically later
  bids: Bid[] = [];

  ngOnInit(): void {
    this.loadDummyBids();
  }

  loadDummyBids() {
    this.bids = [
      {
        auctionID: 101,
        bidID: 1,
        bidderID: 201,
        bidAmount: 15000,
        bidTime: '2025-01-10 10:30 AM',
        status: 'OPEN',
        bidStatus: 'WIN'
      },
      {
        auctionID: 102,
        bidID: 2,
        bidderID: 202,
        bidAmount: 22000,
        bidTime: '2025-01-11 02:15 PM',
        status: 'CLOSED',
        bidStatus: 'LOSE'
      }
    ];
  }

  withdrawBid(auctionID: number) {
    if (confirm('Are you sure you want to withdraw this bid?')) {
      this.bids = this.bids.filter(b => b.auctionID !== auctionID);
    }
  }

  isOpen(status: string): boolean {
    return status !== 'CLOSED';
  }
}
