import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: any[] = [];

  addWorkout(userName: string, workoutType: string, minutes: number) {
    this.workouts.push({ userName, workoutType, minutes });
  }

  getWorkouts() {
    return this.workouts;
  }
}
