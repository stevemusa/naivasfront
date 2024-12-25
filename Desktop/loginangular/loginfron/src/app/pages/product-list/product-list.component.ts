import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../models/product.model'; // Import the Product type

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    { 
      id: 1, 
      name: 'Product A', 
      price: 100, 
      description: 'Description A', 
      imageUrl: 'path/to/image.jpg', 
      category: 'Category A', 
      stock: 20 
    },
    { 
      id: 2, 
      name: 'Product B', 
      price: 200, 
      description: 'Description B', 
      imageUrl: 'path/to/image.jpg', 
      category: 'Category B', 
      stock: 15 
    },
    { 
      id: 3, 
      name: 'Product C', 
      price: 300, 
      description: 'Description C', 
      imageUrl: 'path/to/image.jpg', 
      category: 'Category C', 
      stock: 10 
    }
  ];
}
