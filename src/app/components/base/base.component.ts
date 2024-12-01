import { Component, computed, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  standalone: false,

  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

  public cardData: Array<string> = [
    "signal",
    "pipes",
    "directives",
    "forms"
  ]

  constructor(private router: Router) {

  }

  public navigateToTopic(route: string) {
    this.router.navigate([route])
  }
}
