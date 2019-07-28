import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  bsModalRef: BsModalRef;
  @ViewChild('newProductForm', {static: false}) newProductForm: NgForm;
  product: any = {
    ItemName: '',
    Price: 0,
    date: '',
  };

  constructor(
    private modalService: BsModalService,
    private apisService: ApisService,
  ) { }

  ngOnInit() {
  }
  newProduct() {
    this.apisService.insert(this.product).subscribe((response: any) => {}, (error: any) => {
      console.log(error);
    });
  }
}
