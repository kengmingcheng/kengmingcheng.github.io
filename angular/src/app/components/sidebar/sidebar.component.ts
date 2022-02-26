import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  navs: nav[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navs = [
      {name: 'Home', link: '#home'},
      {name: 'Profile', link: '#about'},
      {name: 'Career', link: '#exps'},
      {name: 'Education', link: '#edus'},
    ];
  }

  collapseSideBar(event ?: Event): void {
    document.body.classList.remove('nav-open');
  }
}

class nav {
  name?: string;
  link?: string;
}