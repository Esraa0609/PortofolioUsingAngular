import { Component } from '@angular/core';
import { Project } from '../interfaces/project';

declare var bootstrap: any;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: 'Connect 4 Game',
      description: 'This is a Connect Four game built as part of the Visual C# course at the ITI (Information Technology Institute), Full Stack .NET Track.It demonstrates how to combine WinForms, game logic, and GDI+ drawing into a fun project with a polished user experience.',
      photo: 'connect-4.jpg'
    },
    {
      name: 'CardioCare: An AI Powered Assistant for Heart Failure',
      description: "This project is CardioCare, a bilingual mobile health app designed to fight heart failure. It provides early detection, personalized triage, and AI-guided support to help patients anytime, anywhere especially in rural and low-resource areas where access to specialists is limited.",
      photo: 'cardiocare.jpg'
    },
    {
      name: 'Sales Representative Mobile Application',
      description: "Sales Rep App Developed during my Misr Technology Services training, this Flutter app streamlines sales reps' tasks with real-time product availability, order placement, delivery tracking, and personalized dashboards. Designed in Figma, it supports multiple languages and features a maintainable code structure.",
      photo: 'salesRep_project.jpg'
    },
    {
      name: 'Anime Recommendation System',
      description: 'Anime is an enormous world with thousands of titles out there, choosing what to watch next can be overwhelming. I wanted to create a system that mimics how a fellow anime fan might recommend something:"You liked Death Note? Try Code Geass!""Into romance with a supernatural twist? Watch Noragami!"This project is a smart Anime Recommendation System built with Python. It uses real user data and anime metadata to suggest shows you might love based on what you (and others) already enjoy.We combine the power of:Content-based filtering (recommendations based on genre, type, etc.)Collaborative filtering (recommendations based on user behavior)',
       photo: 'anime_rec_project.png'
    },
    {
      name: 'Twitter Sentiment Analysis',
      description: 'This project is a Twitter Sentiment Analysis pipeline built with Python.It processes real tweets, cleans the text, converts them into machine-readable features, and applies ML models to determine their sentiment.',
      photo: 'twitter_project.jpg'
    },
    {
      name: 'Data Visualisation using PowerBi',
      description: 'This project is a Sales Performance Dashboard built most likely using Microsoft Power BI (or a similar BI tool). It visualizes key business metrics to help management analyze sales performance across products, regions, and time.',
      photo: 'dashboard.jpg'
    }
  ];

  selectedProject: Project | null = null;

  openModal(project: Project) {
    this.selectedProject = project;
    const modalElement = document.getElementById('projectModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
