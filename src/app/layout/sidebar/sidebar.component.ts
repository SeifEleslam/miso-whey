import { Component } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../../interfaces/models/menuItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
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
