import { Component } from '@angular/core';
import { COMPANY_LOGO } from '../../interfaces/consts/images';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  companyLogoUrl = COMPANY_LOGO;
}
