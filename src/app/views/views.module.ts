import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';

import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent, CreateProductComponent, ListProductComponent],
  imports: [CommonModule, ViewsRoutingModule, SharedModule],
  exports: [HomeComponent, ProductsComponent],
})
export class ViewsModule {}