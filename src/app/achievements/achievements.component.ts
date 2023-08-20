import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  achievementsList = [
    {
      name: 'Secured University Rank 4 in the final year of engineering',
      associatedWith: [
        {
          name: 'Pune Institute of Computer Technology',
          link: 'http://mldi.pict.edu/CE-dept/pdf/University_Rankers_BE(2015Pattern)_May%202020.pdf',
        },
      ],
    },
    {
      name: 'Secured departmental Rank 10 in the third year of engineering',
      associatedWith: [
        {
          name: 'Pune Institute of Computer Technology',
          link: 'http://w.pict.edu/CE-dept/pdf/University%20-%20Rankers_TE2019.pdf',
        },
      ],
    },
    {
      name: 'Secured University Rank 8 in the second year of engineering',
      associatedWith: [
        {
          name: 'Pune Institute of Computer Technology',
          link: 'https://pict.edu/',
        },
      ],
    },
    {
      name: 'Secured departmental Rank 2 in the second year of engineering',
      associatedWith: [
        {
          name: 'Pune Institute of Computer Technology',
          link: 'https://pict.edu/',
        },
      ],
    },
    {
      name: 'Secured departmental Rank 8 in the first year of engineering',
      associatedWith: [
        {
          name: 'Pune Institute of Computer Technology',
          link: 'https://pict.edu/',
        },
      ],
    },
    {
      name: 'Accoladed among the top 10 impactful projects from 3850 in Pune Smart City Hackathon, 2018',
      associatedWith: [
        {
          name: 'HackerEarth, ',
          link: "https://www.hackerearth.com/challenges/hackathon/niti-aayog-pune-smart-city-hackathon/#:~:text=Pune%20now%20envisages%20to%20solve,solutions%20to%20citizen's%20leading%20challenges.",
        },
        {
          name: 'Pune Smart City Hackathon',
          link: 'https://punesmartcity.in/en/image_gallery/niti-aayog-pune-smart-city-hackathon-2018/',
        },
      ],
    },
    {
      name: 'Shortlisted among top 8 teams among 4050 projects for Smart Odisha Hackathon, 2018',
      associatedWith: [
        {
          name: 'HackerEarth, ',
          link: 'https://www.hackerearth.com/challenges/hackathon/smart-odisha-hackathon/',
        },
        {
          name: 'BPUT',
          link: 'https://www.facebook.com/bputsmartodishahackathon/',
        },
      ],
    },
    {
      name: 'Finalist in Smart India Hackathon, 2019',
      associatedWith: [
        {
          name: 'Smart India Hackathon',
          link: 'https://www.sih.gov.in/',
        },
      ],
    },
    {
      name: 'Honored with Best Performer and Spring Champion Title in SMS Digital',
      associatedWith: [
        {
          name: 'SMS Digital GmbH',
          link: 'https://www.sms-digital.com/',
        },
      ],
    },

    {
      name: 'Received scholarship for being topper in Grades X, XII and bachelor',
      associatedWith: [
        {
          name: 'Hindustan Aeronautics Limited',
          link: 'https://hal-india.co.in/',
        },
      ],
    },
    {
      name: 'Accoladed with Best Technical Student and Principal Medal in Grade X',
      associatedWith: [
        {
          name: "Boys' Town School",
          link: 'https://boystown.in/app2014/',
        },
      ],
    },
    {
      name: 'Won 2 Gold Medals in NSO (National Science Olympiad) at the zonal level',
      associatedWith: [
        {
          name: 'National Science Olympiad',
          link: 'https://www.sofworld.org/nso',
        },
      ],
    },
    {
      name: 'Won Gold Medal in IMO (International Mathematics Olympiad) at the zonal level',
      associatedWith: [
        {
          name: 'International Mathematics Olympiad',
          link: 'https://www.imo-official.org/',
        },
      ],
    },
    {
      name: 'Secured Rank 1 in Grade X',
      associatedWith: [
        {
          name: "Boys' Town School",
          link: 'https://boystown.in/app2014/',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
