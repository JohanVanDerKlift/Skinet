import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    imports: [MatBadge, MatIcon, MatButton, RouterLink, RouterLinkActive],
    selector: 'app-header',
    styleUrl: './header.component.scss',
    templateUrl: './header.component.html',
})
export class HeaderComponent {}
