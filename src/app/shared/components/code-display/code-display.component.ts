import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-display',
  standalone: false,

  templateUrl: './code-display.component.html',
  styleUrl: './code-display.component.scss'
})
export class CodeDisplayComponent {
  @Input() code: string = ''; // Code to display

  copyCode(): void {
    navigator.clipboard.writeText(this.code).then(() => {
      alert('Code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  }
}
