import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgbCollapseModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  isCollapsed = true;
}
