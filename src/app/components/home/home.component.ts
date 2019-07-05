import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu: string = '../../../assets/menu_enhanced.svg';
  close: string = '../../../assets/closeButton.svg'
  showNav: boolean = true;

  show(){
    this.showNav = !this.showNav;
  }
  constructor() { }

  ngOnInit() {
  }

}
