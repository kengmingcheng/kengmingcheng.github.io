import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { aboutMePath } from 'src/app/data/constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  navs: nav[] = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let url = this.router.url
    this.navs = [
      {name: 'Home', link: 'home'},
      {name: 'About', link: 'about'},
      {name: 'Career', link: 'exps'},
      {name: 'Education', link: 'edus'},
    ];
  }

  navigate(event: Event ,tag?: string): void {
    this.router.navigate([aboutMePath], {fragment: tag});
    this.collapseSideBar(event);
  }

  collapseSideBar(event ?: Event): void {
    document.body.classList.remove('nav-open');
  }
}

class nav {
  name?: string;
  link?: string;
}