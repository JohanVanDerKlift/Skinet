import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { ShopComponent } from './features/shop/shop.component';

@Component({
    imports: [HeaderComponent, ShopComponent],
    selector: 'app-root',
    styleUrl: './app.component.scss',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'Skinet';
}
