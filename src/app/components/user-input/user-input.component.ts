import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class UserInputComponent {
  userName: string = '';
  workoutType: string = '';
  minutes: number | null = null;

  constructor(private workoutService: WorkoutService) {}

  onSubmit() {
    if (this.userName && this.workoutType && this.minutes !== null) {
      this.workoutService.addWorkout(this.userName, this.workoutType, this.minutes);
      this.userName = '';
      this.workoutType = '';
      this.minutes = null;
    }
  }
}
