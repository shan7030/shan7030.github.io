import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent implements OnInit {
  languages = [
    'Python',
    'Javascript',
    'C++',
    'Angular',
    'FastAPI',
    'Node.js',
    'Express',
    'Flask',
    'React',
    'Spring Boot',
    'Java',
  ];
  language = 'Python';
  index = 1;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.language = this.languages[this.index];
      this.index = (this.index + 1) % this.languages.length;
    }, 2000);
  }

  onDownloadResume() {
    const URL: string =
      'https://drive.google.com/file/d/16IqO3JX9FFGkpCzkVCRnaqPM3S5xx6oq/view?usp=sharing';
    window.open(URL, '_blank');
  }
}
