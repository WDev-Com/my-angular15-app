export interface Auction {
  auctionID: number;
  itemName: string;
  itemDescription: string;
  startDateTime: string;
  endDateTime: string;
  startPrice: number;
  reservePrice: number;
  currentPrice: number;
  highestBidderID?: number;
  status: 'OPEN' | 'RESERVED' | 'CLOSE';
}
