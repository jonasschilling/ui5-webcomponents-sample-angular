import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  type: string,
  title: string,
  filterValue: string
}

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent implements OnInit {

  type: string;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000).toString();
    }
    return `${value}`;
  }

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.type = data.type;
  }

  onConfirmClick(): void {
    //submit
    this.onCancelClick();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
