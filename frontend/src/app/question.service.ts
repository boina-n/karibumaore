export class QuestionService {
	
	getQuestions() {
		var questions = [
		{title: "What is your age ?", choices: ["21 years", "22 years", "23 years"], rate: 10},
		{title: "What is your age ?", choices: ["21 years", "22 years", "23 years"], rate: 10},
		];
		return questions;
	}
}