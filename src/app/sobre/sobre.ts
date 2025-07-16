import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.html',
  styleUrls: ['./sobre.css']
})
export class SobreComponent {
  empresaNome = 'Loja Kaoa';
  anoFundacao = 2010;
  anoAtual = new Date().getFullYear();

  descricao = `
    Fundada em ${this.anoFundacao}, a ${this.empresaNome} se tornou referência em qualidade e confiança na venda de veículos.
    Trabalhamos com seriedade e dedicação para entregar sempre o melhor atendimento, oferecendo carros selecionados e serviços
    pensados para facilitar a vida de quem busca um novo veículo. São mais de ${this.anoAtual - this.anoFundacao} anos de história,
    milhares de clientes satisfeitos e um compromisso contínuo com a excelência.
  `;

  missao = 'Oferecer veículos de qualidade com transparência, confiança e atendimento diferenciado.';
  visao = 'Ser reconhecida como a melhor loja de veículos da região, promovendo experiências memoráveis aos nossos clientes.';
  valores = [
    'Compromisso com a verdade',
    'Respeito ao cliente',
    'Excelência no atendimento',
    'Responsabilidade e ética',
    'Paixão por automóveis'
  ];
}
