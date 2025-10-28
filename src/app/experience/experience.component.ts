import { Component } from '@angular/core';
import { Project } from '../interfaces/project';

declare var bootstrap: any;

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  selectedExperience: Project | null = null;

  expiriences: Project[] = [
    { name: 'Mobile Application Developer Intern', photo: 'mts.jpg', description: '' },
    { name: 'Business Intelligence Developer Intern', photo: 'mts.jpg', description: '' },
    { name: 'Summer Training Program Intern', photo: 'SRTA-City_logo.png', description: '' },
    { name: 'Big Data & Data Analytics Intern', photo: 'myComm.png', description: '' },
    { name: 'Web Development Intern', photo: 'Orange.png', description: '' },
  ];

  openModal(experience: Project) {
    this.selectedExperience = experience;
    const modal = new bootstrap.Modal(document.getElementById('experienceModal'));
    modal.show();
  }
}
