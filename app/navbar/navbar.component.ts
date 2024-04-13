import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent {
  showSmallMenu: boolean = false;

  toggleNavbar() {
    this.showSmallMenu = !this.showSmallMenu;
  }
  constructor(public router: Router) {}
  userProfilePage() {
    this.router.navigateByUrl('/userProfile');
  }
}

