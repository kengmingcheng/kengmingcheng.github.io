import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/data/interfaces'
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skill?: Skill;
  skills: Skill[] = [];

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.getSkills();
    // this.skills = this.getSkills();
  }

  getSkills(): void {
    // let skills : Skill[];
    this.webService.getSkills()
    .subscribe((skills : Skill[]) => {
      this.skills = skills;
    })
  }

}
