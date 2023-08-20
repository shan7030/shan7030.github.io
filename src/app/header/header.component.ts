import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  fragment: string;
  toggleOverlays: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
    });
  }

  public navigateToSection(section: string) {
    window.location.hash = section;
  }

  flipOverlay() {
    this.toggleOverlays = !this.toggleOverlays;
  }

  closeNav() {
    this.toggleOverlays = false;
  }
}
