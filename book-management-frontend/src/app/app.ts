import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ← add this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class App {}