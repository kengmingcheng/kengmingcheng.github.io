import { Component, OnInit, Input } from '@angular/core';
import { Education } from 'src/app/data/interfaces';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() edu?: Education;

  constructor() { }

  ngOnInit(): void {
  }

}
