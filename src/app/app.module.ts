import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/tpl/header/header.component';
import { FooterComponent } from './components/tpl/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ProductModalComponent } from './modals/product-modal/product-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    InvoiceComponent,
    ProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    ProductModalComponent
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
