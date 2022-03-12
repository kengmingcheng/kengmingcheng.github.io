import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill, Career, Education, SocialLink } from '../data/interfaces';
import { SKILLS, CAREERS, EDUCATIONS, SOCIALLINKS } from '../data/data'

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor() { }

  getSkills(): Observable<Skill[]> {
    let result = of(SKILLS);
    return result;
  }

  getCareers(): Observable<Career[]> {
    let result = of(CAREERS)
    return result;
  }

  getEducations(): Observable<Education[]> {
    let result = of(EDUCATIONS)
    return result;
  }

  getSocialLinks(): Observable<SocialLink[]> {
    let result = of(SOCIALLINKS);
    return result;
  }
}
