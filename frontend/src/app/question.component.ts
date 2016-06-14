import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: "question-component",
	template:`
	<div class="panel panel-default">
	  <div class="panel-heading">{{ title }}</div>
	  <div class="panel-body">
	    <div class="radio" *ngFor="let choice of choices; let index = index">
		  <label><input type="radio" name="optradio" (click)="selectedIndex=index;">{{ choice }}</label>
		</div>
	  </div>
	  <div class="panel-footer">
	  <button (click)="next.emit({selectedIndex: selectedIndex})">Next</button>
	  </div>
	</div>
	`,
})
export class QuestionComponent {
	@Input() title: string="";
	@Input() choices: string[]=[];
	@Output() next = new EventEmitter();
	selectedIndex: number=0;
}