import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.html',
  styleUrls: ['./servicos.css']
})
export class ServicosComponent {
  empresaNome = 'Loja Kaoa';

  servicos = [
    {
      titulo: 'Venda de Veículos',
      descricao: 'Carros seminovos e usados em excelente estado, com garantia e procedência comprovada.',
      icone: 'bi bi-car-front-fill'
    },
    {
      titulo: 'Financiamento Personalizado',
      descricao: 'Condições especiais para facilitar a compra do seu carro novo ou usado.',
      icone: 'bi bi-cash-stack'
    },
    {
      titulo: 'Assistência Técnica',
      descricao: 'Equipe especializada para manutenção e reparos com peças originais.',
      icone: 'bi bi-tools'
    },
    {
      titulo: 'Troca e Avaliação',
      descricao: 'Avaliação justa e rápida do seu veículo para troca ou venda.',
      icone: 'bi bi-arrow-repeat'
    }
  ];
}
