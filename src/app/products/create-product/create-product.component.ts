import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productsService: ProductsService , private router: Router) { }

  ngOnInit(): void {
  }

  addNewProduct(form){
    console.log(form.value);
    
    let newProduct = {
        //id: 11,
        categoryId: form.value.product_category,
        productName: form.value.product_name,
        description: form.value.product_description,
        rating: form.value.product_rating,
        price: form.value.product_price,
        productImg: '',
        isAvailable: 1,
        color: form.value.product_color,
        reviews: form.value.product_category,
    };
    //  let newProduct = {
    //     //id: 11,
    //     categoryId: ['', Validators.required ],
    //     productName: ['', Validators.required ],
    //     description: ['', Validators.required ],
    //     rating: ['', Validators.required ],
    //     price: ['', Validators.required ],
    //     isAvailable: 1,
    //     color: ['', Validators.required ],
    //     reviews: form.value.product_category,
    // };

    console.log(newProduct);

    this.productsService.createProduct(newProduct).subscribe(data => {
      console.log(data);
      this.router.navigate(['/products']);

    });

  }
}
