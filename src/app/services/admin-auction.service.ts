import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auction } from '../models/auction.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private baseUrl = 'http://localhost:8080/api/auctions'; // change as needed

  constructor(private http: HttpClient) {}

  getAllAuctions() {
    return this.http.get<Auction[]>(this.baseUrl);
  }

  changeStatus(id: number) {
    return this.http.put(`${this.baseUrl}/${id}/status`, {});
  }

  deleteAuction(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  finalizeAuction(id: number) {
    return this.http.post(`${this.baseUrl}/${id}/finalize`, {});
  }
}
