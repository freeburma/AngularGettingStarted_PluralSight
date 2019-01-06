import {Component, OnInit} from '@angular/core'; // OnInit
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit
{
    pageTitle: string = 'Product List';
    imageWidth: number = 50; 
    imageMargin: number = 2; 
    showImage: boolean = false;
    errorMessage: string;

    // listFilter: string = 'cart';
    _listFilter: string; 

    // Implementing Getter and Setter methods 
    get listFilter(): string
    {
      return this._listFilter; 
    }
    set listFilter(value: string)
    {
      this._listFilter = value;
      this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }


    filterProducts: IProduct[];
    products: IProduct[] = []; 

      // Creating a constructor 
      constructor(private productService: ProductService)
      {
        // this.listFilter = 'cart';
      }

      onRatingClicked(message: string): void
      {
         this.pageTitle = 'Product List: ' + message; 

      }// end onRatingClicked()

      performFilter(filterBy: string) : IProduct[]
      {
        filterBy = filterBy.toLocaleLowerCase(); 

        return this.products.filter((product: IProduct) => 
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        ); 
      }

      // THis will show or hide the images 
      toggleImage(): void
      {
        this.showImage = !this.showImage;
      }

      // OnInit interface
      ngOnInit(): void{
        // console.log('In OnInit');
        this.productService.getProducts().subscribe(
          products => {
            this.products = products;
            this.filterProducts = this.products; 
          }, 
          error => this.errorMessage = <any>error
        ); 
      }
}