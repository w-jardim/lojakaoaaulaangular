import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {}
