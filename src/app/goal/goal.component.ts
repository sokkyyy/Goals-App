import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal (1, 'Watch TS4', 'Find an online version and watch merlin find his son', new Date(2019, 8, 24)),
    new Goal (2, 'Finish Angular', 'I have to buy cookies for the parrot', new Date(2019, 8, 25)),
    new Goal (3, 'Solve math homework', 'Diana has her birthday coming up soon', new Date(2019, 10, 12)),
    new Goal (4, 'Chores', 'Pupper likes expensive sancks', new Date(2019, 11, 12)),
    new Goal (5, 'Get Dog food', 'Damn Math', new Date(2019, 9, 21)),
    new Goal (6, 'Buy phone case', 'Cause I am an evil overlord', new Date(2019, 9, 1)),
  ];

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`);

      if (toDelete) {
        this.goals.splice(index, 1);
      }
    }
  }
  addNewGoal(goal) {
    const goalsLength = this.goals.length;
    goal.id = goalsLength + 1;
    goal.completionDate = new Date(goal.completionDate);
    this.goals.push(goal);
  }

  constructor() { }

  ngOnInit() {
  }

}
