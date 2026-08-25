import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
    imports: [MatBadge, MatIcon, MatButton],
    selector: 'app-header',
    styleUrl: './header.component.scss',
    templateUrl: './header.component.html',
})
export class HeaderComponent {}
