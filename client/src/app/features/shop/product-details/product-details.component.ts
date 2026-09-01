import { Component, inject, OnInit, signal } from '@angular/core';
import { ShopService } from '../../../core/service/shop.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { Pagination } from '../../../shared/models/pagination';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatDivider } from '@angular/material/list';

@Component({
    imports: [CurrencyPipe, MatButton, MatIcon, MatLabel, MatInput, MatDivider, MatFormField],
    selector: 'app-product-details',
    styleUrl: './product-details.component.css',
    templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
    private shopService = inject(ShopService);
    private activatedRoute = inject(ActivatedRoute);
    product = signal<Product | undefined>(undefined);

    ngOnInit(): void {
        this.loadProduct();
    }

    loadProduct() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!id) return;
        this.shopService.getProduct(+id).subscribe({
            next: (response) => this.product.set(response),
            error: (error) => console.log(error),
        });
    }
}
