import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  bell: string = "assets/icons/bell.png"
  profile: string = "assets/icons/profile.png"

}
