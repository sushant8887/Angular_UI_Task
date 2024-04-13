import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from '../register/register.component';
import { NavbarComponent } from '../navbar/navbar.component';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomepageComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '40%', // Set the width of the dialog
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}