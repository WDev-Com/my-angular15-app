export interface Bid {
  auctionID: number;
  bidID: number;
  bidderID: number;
  bidAmount: number;
  bidTime: string;
  status: 'OPEN' | 'CLOSED';
  bidStatus?: 'WIN' | 'LOSE';
}
