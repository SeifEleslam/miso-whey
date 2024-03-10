import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuItem } from '../../interfaces/models/menuItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.url = this.router.url;
    console.log(this.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.urlAfterRedirects;
        console.log(this.url);
      }
    });
  }
  url = '/';
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'bi bi-clipboard-data',
      routerLink: ['dashboard'],
    },
    {
      label: 'Users',
      icon: 'bi bi-people',
      routerLink: ['users'],
    },
  ];
}
