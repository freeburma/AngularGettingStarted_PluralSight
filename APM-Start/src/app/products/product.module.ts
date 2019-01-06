import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
      
    ]), 
    SharedModule
  ], 
  declarations: [
    ProductListComponent, // product-list-component.ts. Must import $"import { ProductListComponent } from './products/product-list.component';"
    ConvertToSpacesPipe,   // For custom HTML tag
    ProductDetailComponent, 
  ],

})
export class ProductModule { }
