import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class WorkoutListComponent implements OnInit {
  searchTerm: string = '';
  selectedType: string = '';
  filteredWorkouts: any[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.filteredWorkouts = this.workoutService.getWorkouts();
  }

  search() {
    this.filter();
  }

  filter() {
    this.filteredWorkouts = this.workoutService.getWorkouts().filter(workout => {
      return workout.userName.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
             (this.selectedType === '' || workout.workoutType === this.selectedType);
    });
  }
}
