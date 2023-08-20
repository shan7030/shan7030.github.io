import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationList = [
    {
      degree: 'Bachelor of Engineering - Computer Engineering',
      university: 'Pune Institute of Computer Technology',
      year: '2020',
      link: 'https://pict.edu/',
      grades: 'Grade: 9.7 / 10',
    },
    {
      degree: 'Higher Secondary School',
      university: 'R.Y.K. Science College',
      year: '2016',
      link: 'https://hptrykcollege.com/',
      grades: 'Grade: 84.30 %',
    },
    {
      degree: 'Secondary School',
      university: "Boys' Town School",
      year: '2014',
      link: 'https://boystown.in/app2014/',
      grades: 'Grade: 96.00 %',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
