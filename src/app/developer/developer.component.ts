import { Component, Output } from '@angular/core';
import { DeveloperModel } from '../models/developer.model';
import { SkillComponent } from '../skill/skill.component';
import { SkillModel } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  private dev1 = new DeveloperModel('a', 'b', 24, 'd', 'e', [
    new SkillModel('f', 'g', 'h'),
    new SkillModel('f', 'g', 'h'),
  ]);
  public devs: Array<DeveloperModel> = [this.dev1];
}
