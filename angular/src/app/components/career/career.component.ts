import { Component, OnInit, Input } from '@angular/core';
import { Career } from 'src/app/data/interfaces'

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  @Input() career?: Career;

  constructor() { }

  ngOnInit(): void {
  }

}
