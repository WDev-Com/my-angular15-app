import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction.model';
import { AuctionService } from '../../services/admin-auction.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  auctions: Auction[] = [];

  constructor(private auctionService: AuctionService) {}
   
  /* from API 
  ngOnInit(): void {
    this.loadAuctions();
  }*/

   /* Dummy Data */
  ngOnInit(): void {
  this.auctions = [
    {
      auctionID: 101,
      itemName: 'Vintage Wall Clock',
      itemDescription: 'Antique wooden wall clock from 1950s',
      startDateTime: '2025-01-10T10:00:00',
      endDateTime: '2025-01-15T18:00:00',
      startPrice: 5000,
      reservePrice: 8000,
      currentPrice: 9500,
      highestBidderID: 23,
      status: 'CLOSE'
    },
    {
      auctionID: 102,
      itemName: 'Royal Enfield Classic 350',
      itemDescription: 'Well maintained bike, single owner',
      startDateTime: '2025-01-20T09:00:00',
      endDateTime: '2025-01-25T20:00:00',
      startPrice: 120000,
      reservePrice: 150000,
      currentPrice: 135000,
      status: 'OPEN'
    }
  ];
}


  loadAuctions() {
    this.auctionService.getAllAuctions().subscribe(data => {
      this.auctions = data;
    });
  }

  changeStatus(id: number) {
    this.auctionService.changeStatus(id).subscribe(() => {
      this.loadAuctions();
    });
  }

  updateAuction(id: number) {
    console.log('Navigate to update auction:', id);
  }

  deleteAuction(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.auctionService.deleteAuction(id).subscribe(() => {
        this.loadAuctions();
      });
    }
  }

  finalizeAuction(id: number) {
    this.auctionService.finalizeAuction(id).subscribe(() => {
      this.loadAuctions();
    });
  }

  viewHighest(id: number) {
    console.log('View highest bidder for auction:', id);
  }
}
