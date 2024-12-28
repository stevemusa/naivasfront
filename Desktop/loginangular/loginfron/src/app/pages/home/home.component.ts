import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Example data for promotional banners and featured products
  banners = [
    { image: 'promo2.PNG', alt: 'Promo 1', link: '/product-list' },
    { image: 'promo1.PNG', alt: 'Promo 2', link: '/product-list' }
  ];
  
  featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 120, image: 'wireless headphones.PNG' },
    { id: 2, name: 'Smart Watch', price: 80, image: 'smartwatch.PNG' },
    { id: 3, name: 'Gaming Laptop', price: 950, image: 'gaming laptop.PNG' }
  ];
  

  // Navigate to a product's details
  viewProductDetails(productId: number): void {
    console.log(`Navigate to product ID: ${productId}`);
    // Replace with actual navigation logic
  }
}
