import { Component, OnInit } from '@angular/core';
import { SocialLink } from 'src/app/data/interfaces';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socialClass: string = 'fab fa-linkedin';
  link: string = 'https://www.linkedin.com/in/chengkm';
  socialLinks: SocialLink[] = [];

  year: number = new Date().getFullYear();

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.getSocialLinks();
  }

  getSocialLinks(): void {
    this.webService.getSocialLinks()
    .subscribe((socialLinks: SocialLink[]) => {
        this.socialLinks = socialLinks;
    });
  }

}
