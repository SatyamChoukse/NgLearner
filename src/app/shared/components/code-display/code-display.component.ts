import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-display',
  standalone: false,

  templateUrl: './code-display.component.html',
  styleUrl: './code-display.component.scss'
})
export class CodeDisplayComponent {
  @Input() htmlCode: string = ''; // HTML code snippet
  @Input() tsCode: string = ''; // TypeScript code snippet
  activeTab: 'html' | 'ts' = 'html'; // Default active tab
  copyBtn: string = 'Copy'; // Button text

  // Switch between HTML and TS tabs
  switchTab(tab: 'html' | 'ts'): void {
    this.activeTab = tab;
    this.copyBtn = 'Copy'; // Reset button text when switching tabs
  }

  // Copy code to clipboard
  copyCode(): void {
    const codeToCopy = this.activeTab === 'html' ? this.htmlCode : this.tsCode;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      this.copyBtn = 'Copied!';
      setTimeout(() => (this.copyBtn = 'Copy'), 2000);
    }).catch(err => {
      console.error('Failed to copy code:', err);
    });
  }
}
