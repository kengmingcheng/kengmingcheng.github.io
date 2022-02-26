import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';
import { Skill, Career } from 'src/app/data/interfaces'

@Component({
  selector: 'app-root-view',
  templateUrl: './root-view.component.html',
  styleUrls: ['./root-view.component.css']
})
export class RootViewComponent implements OnInit {

  constructor(private webService: WebService) { }

  ngOnInit(): void {
  }
}
