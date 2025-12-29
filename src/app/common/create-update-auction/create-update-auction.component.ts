import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auction } from '../../models/auction.model';

@Component({
  selector: 'app-create-update-auction',
  templateUrl: './create-update-auction.component.html',
  styleUrls: ['./create-update-auction.component.css']
})
export class CreateUpdateAuctionComponent implements OnInit {

  auctionForm!: FormGroup;
  isEditMode = false;
  pageTitle = 'Create Auction';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();

    const auctionId = this.route.snapshot.paramMap.get('id');
    if (auctionId) {
      this.isEditMode = true;
      this.pageTitle = 'Update Auction';
      this.loadAuction(+auctionId);
    }
  }

  initForm() {
    this.auctionForm = this.fb.group({
      itemName: ['', Validators.required],
      itemDescription: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startPrice: ['', Validators.required],
      reservePrice: ['', Validators.required],
      status: ['OPEN', Validators.required]
    });
  }

  loadAuction(id: number) {
    // Dummy data for now
    const auction: Auction = {
      auctionID: id,
      itemName: 'Laptop',
      itemDescription: 'Gaming Laptop',
      startDateTime: '2025-01-20T10:00',
      endDateTime: '2025-01-25T18:00',
      startPrice: 50000,
      currentPrice: 0,
      reservePrice: 60000,
      status: 'OPEN'
    };

    this.auctionForm.patchValue(auction);
  }

  submit() {
    if (this.auctionForm.invalid) return;

    if (this.isEditMode) {
      console.log('Update Auction', this.auctionForm.value);
    } else {
      console.log('Create Auction', this.auctionForm.value);
    }

    this.router.navigate(['/admin/auctions']);
  }

  clearForm() {
    this.auctionForm.reset({ status: 'OPEN' });
  }

  goBack() {
    this.router.navigate(['/admin/auctions']);
  }
}
