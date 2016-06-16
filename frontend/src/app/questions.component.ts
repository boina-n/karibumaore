import {Component} from '@angular/core';
import {QuestionService} from './question.service';
import {QuestionComponent} from './question.component';

@Component({
	selector: "questions-component",
	template:`
		<div class="container">
			<div class="col-sm-4"></div>
			<question-component class="col-sm-4" [title]="questions[q].title" [choices]="questions[q].choices" (next)="onNext($event)"></question-component>
			<div class="col-sm-4"></div>
		</div>
		<div [hidden]="!choice">You have chosed {{questions[q].choices[choice]}}</div>
	`,
	providers: [QuestionService],
	directives: [QuestionComponent],
	styles:[`
	`]
})
export class QuestionsComponent {
	private questions;
	private q;
	private choice = false;
	constructor(private questionService: QuestionService) {
		this.questions = questionService.getQuestions();
		this.q = 0;
	}

	onNext($event){
		this.choice=$event.selectedIndex;
		// this.q++;
	}
}