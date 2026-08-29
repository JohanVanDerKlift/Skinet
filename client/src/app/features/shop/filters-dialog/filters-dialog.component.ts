import { Component, inject } from '@angular/core';
import { ShopService } from '../../../core/service/shop.service';
import { MatDivider, MatListOption, MatSelectionList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [MatDivider, MatSelectionList, MatListOption, MatButton, FormsModule],
    selector: 'app-filters-dialog',
    styleUrl: './filters-dialog.component.css',
    templateUrl: './filters-dialog.component.html',
})
export class FiltersDialogComponent {
    shopService = inject(ShopService);
    private dialogRef = inject(MatDialogRef<FiltersDialogComponent>);
    data = inject(MAT_DIALOG_DATA);

    selectedBrands: string[] = this.data.selectedBrands;
    selectedTypes: string[] = this.data.selectedTypes;

    applyFilters() {
        this.dialogRef.close({
            selectedBrands: this.selectedBrands,
            selectedTypes: this.selectedTypes,
        })
    }
}
