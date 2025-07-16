import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from '../car-card/car-card';

interface Carro {
  imagem: string;
  marca: string;
  modelo: string;
  ano: number;
  preco: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements AfterViewInit {
  carros: Carro[] = [
    { imagem: 'mustang.png', marca: 'Ford', modelo: 'Mustang', ano: 2021, preco: 300000 },
    { imagem: 'camaro.jpg', marca: 'Chevrolet', modelo: 'Camaro', ano: 2022, preco: 350000 },
    { imagem: 'golf.png', marca: 'Volkswagen', modelo: 'Golf', ano: 2020, preco: 150000 },
    { imagem: 'fusca.png', marca: 'Volkswagen', modelo: 'Fusca', ano: 1978, preco: 45000 },
    { imagem: 'uno.png', marca: 'Fiat', modelo: 'Uno', ano: 2015, preco: 28000 }
  ];

  @ViewChild('carrossel', { static: false }) carrossel!: ElementRef<HTMLDivElement>;

  private scrollAmount = 0;
  private cardWidth = 320; // largura do card + gap
  private intervalId: any;

  ngAfterViewInit(): void {
    if (!this.carrossel) return;

    this.intervalId = setInterval(() => {
      const nativeEl = this.carrossel.nativeElement;
      this.scrollAmount += this.cardWidth;

      if (this.scrollAmount > nativeEl.scrollWidth - nativeEl.clientWidth) {
        this.scrollAmount = 0;
      }

      nativeEl.scrollTo({ left: this.scrollAmount, behavior: 'smooth' });
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
