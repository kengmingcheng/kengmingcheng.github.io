import { Component, OnInit , Input} from '@angular/core';
import { SocialLink } from 'src/app/data/interfaces'

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  @Input() socialLink : SocialLink = {link:''};

  constructor() { }

  ngOnInit(): void {
  }

}
