import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectList = [
    {
      imgLink: '',
      name: 'Collect Chunk',
      description:
        'Implemented an Android and Web Application which ranked among top 10 from 3850 submissions in Pune Smart City Hackathon(City Level Hackathon) 2018 organized by HackerEarth, Savitribai Phule University based on “Solid Waste Management Theme”',
      tags: 'Angular, Typescript, Javascript, Java, Android, MongoDB, Firebase, Google Maps API, Node.js, Express, mongoose',
    },
    {
      imgLink: '',
      name: 'Ayushman Odisha',
      description:
        'Created Web and Android application which was selected for Smart Odisha Hackathon 2018 and shortlisted among top 8 teams which included analysis of data using ML Algorithm for setting the camp for a particular disease organized by HackerEarth , BPUT',
      tags: 'Android, Angular, Typescript, Google Charts, Javascript, PostgreSQL, Node.js, Express, sequelize, node-postgres',
    },
    {
      imgLink: '',
      name: 'Voice Bot speaking',
      description:
        'Led the team to develop a voice bot in local language, which was shortlisted in top 4 teams among 1850 submissions in Smart India Hackathon (National Level Hackathon) 2019 for NCORD organization.',
      tags: 'Android, Java, Google voice to text API, Driod API, Dialogflow, XML, Firebase cloud store, Firebase storage',
    },
    {
      imgLink: '',
      name: 'Code opener CLI',
      description:
        'Build a command line interface tool to add any project as favorite and open it from anywhere using just one command. Just use copen add to add and copen open `project_name` to open . See commands to get idea on more things supported by Code Opener CLI',
      tags: 'Typer, Python 3.6, JSON, Pytest, Pip, Poetry',
    },
    {
      imgLink: '',
      name: 'Doctor Patient Reminder App',
      description:
        'Build a Android App for smooth communication between Doctor and Patients. Doctor can give Prescription to patient and then patient can set reminder according to the prescription given by the Doctor',
      tags: 'Android, Firebase Realtime DB, Firebase storage, User authentication and authorization',
    },
    {
      imgLink: '',
      name: 'Indian Space Visit Center',
      description:
        'Developed website for Ticket Booking System for Mars visits and gives other information about mars which was ranked among top 5 projects in Pulzion Competion 2018',
      tags: 'Bootstarp 4, HTML5, CSS,Firebase Realtime DB, JQuery, Javascript',
    },
    {
      imgLink: '',
      name: '',
      description: '',
      tags: '',
    },
    {
      imgLink: '',
      name: '',
      description: '',
      tags: '',
    },
    {
      imgLink: '',
      name: '',
      description: '',
      tags: '',
    },
    {
      imgLink: '',
      name: '',
      description: '',
      tags: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
