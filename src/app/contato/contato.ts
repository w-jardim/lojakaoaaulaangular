import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.html',
  styleUrls: ['./contato.css']
})
export class ContatoComponent {
  nome = '';
  email = '';
  mensagem = '';
  enviado = false;

  enviar(form: any) {
    if (form.valid) {
      this.enviado = true;

      // Simulação do envio
      setTimeout(() => {
        alert('Mensagem enviada com sucesso!');
        this.nome = '';
        this.email = '';
        this.mensagem = '';
        this.enviado = false;
        form.resetForm();
      }, 1000);
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
