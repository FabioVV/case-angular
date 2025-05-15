import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  // Sidebar icons, in order
  logo: string = "assets/icons/ailos_i.png"
  stair: string = "assets/icons/stair.png"
  search: string = "assets/icons/search.png"
  star: string = "assets/icons/star.png"
  comment: string = "assets/icons/comment.png"
  slider: string = "assets/icons/slider.png"
  central: string = "assets/icons/central.png"
}
