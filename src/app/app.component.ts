import { Component } from '@angular/core';
import { UserInputComponent } from './components/user-input/user-input.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInputComponent, WorkoutListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'health-challenge-tracker';
}
