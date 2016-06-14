import { Component } from '@angular/core';
import { QuestionsComponent } from './questions.component';

@Component({
  moduleId: module.id,
  selector: 'karibumaore-app',
  templateUrl: 'karibumaore.component.html',
  styleUrls: ['karibumaore.component.css'],
  directives: [QuestionsComponent],
})
export class KaribumaoreAppComponent {
}
