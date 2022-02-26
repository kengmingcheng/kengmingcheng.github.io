import { Injectable } from '@angular/core';
import { Skill, Career, Education } from '../data/interfaces';
import { SKILLS, CAREERS, EDUCATIONS } from '../data/data'

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor() { }

  getSkills(): Skill[] {
    return SKILLS;
  }

  getCareers(): Career[] {
    return CAREERS;
  }

  getEducations(): Education[] {
    return EDUCATIONS;
  }
}
