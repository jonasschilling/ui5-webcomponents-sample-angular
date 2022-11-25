import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';


export interface FilterSet {
  monthlyRent: number,
  postalCode: number,
  moveInDate: Date,
  perimeter: number
}

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  now: Date = new Date();
  nowFormat = this.now.getDate() + '.' + this.now.getMonth() + '.' + this.now.getFullYear()
  filterNotSet = 'Kein Filter gesetzt.'

  monthlyRentFilter!: number;
  postalCodeCityFilter!: number;
  moveInDateFilter!: Date;
  perimeterFilter!: number;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openRentFilterDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '500px',
      data: {
        type: 'rent',
        title: 'Max. monatliche Miete:',
        filterValue: this.monthlyRentFilter
      },
    });
  }

  openDateFilterDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '500px',
      data: {
        type: 'date',
        title: 'Einzugsdatum ab:',
        filterValue: this.monthlyRentFilter
      },
    });
  }

  openCityFilterDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '500px',
      data: {
        type: 'city',
        title: 'Ort:',
        filterValue: this.monthlyRentFilter
      },
    });
  }

  openPerimeterFilterDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '500px',
      data: {
        type: 'perimeter',
        title: 'Umkreis:',
        filterValue: this.monthlyRentFilter
      },
    });
  }

}
