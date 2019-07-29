import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { ApisService } from 'src/app/services/apis.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  @ViewChild('newProductForm', {static: true}) newProductForm: NgForm;
  // tslint:disable-next-line: no-input-rename
  @Input('product') product: any;
  imageSrc: string;
  reader: any;
  checkValidation = false;

  constructor(
    private modalService: BsModalService,
    private apisService: ApisService,
    public bsModalRef: BsModalRef,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
    if (! this.product) {
      this.product = {};
    } else {
      this.product.ExpireDate = this.datepipe.transform(this.product.ExpireDate, 'yyyy-MM-dd');
    }
  }
  /**
   * convert profile picture to base64
   * @param e link of profile picture
   *
   */
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const imgPattern = /image-*/;
    this.reader = new FileReader();
    if (!file.type.match(imgPattern)) {
      alert('invalid image format');
      return;
    }
    this.reader.onload = this._handleReaderLoaded.bind(this);
    this.reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    this.reader = e.target;
    this.imageSrc = this.reader.result;
    this.product.Photo = this.imageSrc;
    this.apisService.uploadImage(this.imageSrc).subscribe((response: any) => {
    }, (error: any) => {});
  }
  // end of convert img to base64
  newProduct() {
    if (this.newProductForm.invalid) {
      this.checkValidation = true;
      return true;
    }
    this.apisService.insert(this.product).subscribe((response: any) => {
      this.bsModalRef.hide();
    }, (error: any) => {});
  }
}
