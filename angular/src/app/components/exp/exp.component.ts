import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';
import { Career, Education } from 'src/app/data/interfaces'

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  careers: Career[] = [];
  educations: Education[] = [];

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.careers = this.getCareers();
    this.educations = this.getEducations();
  }

  getCareers(): Career[] {
    return this.webService.getCareers();
  }

  getEducations(): Education[] {
    return this.webService.getEducations();
  }

}
