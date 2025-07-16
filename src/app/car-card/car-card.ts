import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-card.html',
  styleUrls: ['./car-card.css']
})
export class CarCardComponent {
  @Input() imagem!: string;
  @Input() marca!: string;
  @Input() modelo!: string;
  @Input() ano!: number;
  @Input() preco!: number;
}
