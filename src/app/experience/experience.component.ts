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
    { name: 'Mobile Application Developer Intern', photo: 'mts.jpg', description: 'Designed and implemented a Flutter mobile application for sales representatives with real-time inventory, order, and delivery tracking features.Applied clean architecture principles and implemented localization for structured, maintainable, and multi-language-supported codebase.' },
    { name: 'Business Intelligence Developer Intern', photo: 'mts.jpg', description: 'Developed Tableau dashboards to visualize KPIs, enabling more informed, data-driven decisions for business stakeholders.Cleaned and transformed datasets, working with ETL processes and database design to improve data accessibility and reliability.' },
     { name: 'IOT Application Development Intern', photo: 'iti.jpg', description: 'Completed an IoT development internship involving sensor-based task building on the MOT platformGained hands-on experience with introductory IoT protocols, data logging, and streaming concepts' },
    { name: 'Summer Training Program Intern', photo: 'SRTA-City_logo.png', description: 'During the training, we were introduced to NLP and LLM with a focus on the Arabic Langauge.' },
    { name: 'Big Data & Data Analytics Intern', photo: 'myComm.png', description: 'Preprocessed and structured raw datasets for use in analytical models, deepening understanding of big data concepts.Built interactive Power BI dashboards that enhanced reporting capabilities and streamlined insights for end users' },
    { name: 'Web Development Intern', photo: 'Orange.png', description: '' },
  ];

  openModal(experience: Project) {
    this.selectedExperience = experience;
    const modal = new bootstrap.Modal(document.getElementById('experienceModal'));
    modal.show();
  }
}
