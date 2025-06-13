import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  url?: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projects: Project[] = [
    {
    title: 'Indian Sign Language Recognition System',
    description: 'A deep learning–based system using GAN and CNN architectures to recognize Indian Sign Language gestures in real-time, optimized for performance and minimal data augmentation.',
    techStack: ['Python', 'Transfer Learning', 'OpenCV', 'Keras', 'TensorFlow'],
    url: 'https://github.com/Rhuchita/ISL-Gesture-Recognition', 
    imageUrl: '/assets/images/ISL-project-1.png'
  },
  {
    title: 'E-Learning Platform for ISL Learners',
    description: 'A full-stack learning platform with responsive UI and cloud-backed video resources for sign language education. Built to support teachers and learners with dynamic assessment tools.',
    techStack: ['ReactJS', 'TypeScript', 'AWS S3', 'CSS3'],
    url: 'https://github.com/Rhuchita/ISL-eLearning', 
    imageUrl: '/assets/images/elearning-platform-project-2.jpg'
  },
    {
  title: 'Plant Disease Prediction App',
  description: 'A web-based tool that predicts plant diseases from leaf images using a trained deep learning model. Provides users with instant diagnostic feedback and care suggestions.',
  techStack: ['Python', 'Flask', 'TensorFlow', 'HTML5', 'CSS3'],
  url: 'https://rhuchita.github.io/predictplant.pbl/',
  imageUrl: 'assets/images/plant-predictor-project-3.jpg'
}
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
