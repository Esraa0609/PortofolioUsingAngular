import { Component } from '@angular/core';
import { Project } from '../interfaces/project';

declare var bootstrap: any;

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {
activities:Project[] = [
  {
    name:'ECPC Compititions Participation in 2025',
    description:"Secured 6th place in Faculty, but unfortunately didn't qualify to ECPC finals",
    photo:'ecpc2025.jpg'
  },
  {
    name:'Data Science Instructor at GDG Damanhour',
    description:'',
    photo:'dscommittee.jpg'
  },
  {
    name:'Vice Head of Training Committee at FCDS ICPC Community',
    description:'I had the honor of serving as Vice Head of the Training Committee, a role that brought everything full circle for me. After starting as a participant, I was nominated by both my coaches and peers to step into a leadership position and I’m proud to share that I was also the first girl to join the community’s core committee. In this role, I helped design and lead the very journey I once walked, guiding a new generation of students through their ICPC experience. It was challenging, rewarding, and truly meaningful.',
    photo:'ecpcboard.jpg'
  },
  {
    name:'ECPC Compititions Participation in 2024',
    description:'Placed 5th overall, second in Faculty & qualified to ECPC finals.',
    photo:'ecpc2024.jpg'
  },
  {
    name:'Mentor in Training Committee at FCDS ICPC Community',
    description:'',
    photo:'ecpcmentor.jpg'
  },
  {
    name:'ECPC Compititions Participation in 2023',
    description:'Secured 25th overall, second in Faculty & qualified to ECPC finals.',
    photo:'ecpc2023.jpg'
  },
  {
    name:'ECPC Compititions Participation in 2022',
    description:'Secured 2nd place in Faculty, qualified to ECPC finals and about one problem for to be qaulified to ACPC',
    photo:'ecpc2022.jpg'
  },
  
]

  
selectedActivity: any = null;

openModal(activity: any) {
  this.selectedActivity = activity;
  const modalElement = document.getElementById('activityModal');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
}
