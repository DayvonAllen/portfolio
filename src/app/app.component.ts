import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu: string = '../assets/menu_enhanced.svg';
  close: string = '../assets/closeButton.svg'
  showNav: boolean = true;

  show(){
    this.showNav = !this.showNav;
  }

}
