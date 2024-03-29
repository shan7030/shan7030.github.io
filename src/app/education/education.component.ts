import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationList = [
    {
      degree: 'Master of Science - Computer Science',
      university: 'University of California, Davis',
      year: '2024',
      nextYear: '',
      link: 'https://www.ucdavis.edu/',
      grades: 'Grades: 4 / 4',
    },
    {
      degree: 'Bachelor of Engineering - Computer Engineering',
      university: 'Pune Institute of Computer Technology',
      year: '2020',
      nextYear: '2023',
      link: 'https://pict.edu/',
      grades: 'Grade: 9.7 / 10',
    },
    {
      degree: 'Higher Secondary School',
      university: 'R.Y.K. Science College',
      year: '2016',
      nextYear: '',
      link: 'https://hptrykcollege.com/',
      grades: 'Grade: 84.30 %',
    },
    {
      degree: 'Secondary School',
      university: "Boys' Town School",
      year: '2014',
      nextYear: '',
      link: 'https://boystown.in/app2014/',
      grades: 'Grade: 96.00 %',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
