import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { introTxt } from 'src/app/data/data';

@Component({
  selector: 'about-me-view',
  templateUrl: './about-me-view.component.html',
  styleUrls: ['./about-me-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutMeViewComponent implements OnInit {

  backgroundImage: string = 'assets/img/intro_background.jpg';
  briefIntro: string = introTxt;

  constructor() { }

  ngOnInit(): void {
  }
}
