import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductModalComponent } from 'src/app/modals/product-modal/product-modal.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  listProduct: any;
  bsModalRef: BsModalRef;

  constructor(
    private apisService: ApisService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.apisService.list().subscribe((response: any) => {
      this.listProduct = response;
    }, (error: any) => {
      console.log(error);
    });
  }
  deleteItem(id) {
    this.apisService.delete(id).subscribe((response: any) => {

    });
  }
  newProduct() {
    this.bsModalRef = this.modalService.show(ProductModalComponent);
  }
}
