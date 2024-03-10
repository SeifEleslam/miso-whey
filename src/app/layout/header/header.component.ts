import { Component, EventEmitter, Output } from '@angular/core';
import { COMPANY_LOGO } from '../../interfaces/consts/images';
import { SharedModule } from '../../modules/shared/shared.module';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  companyLogoUrl = COMPANY_LOGO;
  @Output() toggleMenu = new EventEmitter<any>();
}
