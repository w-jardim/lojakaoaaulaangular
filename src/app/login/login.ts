import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // <-- Importa CommonModule para *ngIf, ngClass etc

type MessageType = 'alert-success' | 'alert-danger' | 'alert-warning';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],  // <-- Aqui inclui CommonModule também
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  message: { text: string; type: MessageType; icon: string } = {
    text: '',
    type: 'alert-success',
    icon: 'bi bi-info-circle-fill',
  };

  constructor(private router: Router) {}

  setMessage(text: string, type: MessageType) {
    const iconsMap = {
      'alert-success': 'bi bi-check-circle-fill',
      'alert-danger': 'bi bi-exclamation-triangle-fill',
      'alert-warning': 'bi bi-exclamation-diamond-fill',
    };

    this.message = {
      text,
      type,
      icon: iconsMap[type] || 'bi bi-info-circle-fill',
    };
  }

  clearMessage() {
    this.message = { text: '', type: 'alert-success', icon: 'bi bi-info-circle-fill' };
  }

  onSubmit() {
    this.clearMessage();

    if (this.email === 'admin@kaoa.com' && this.password === '123456') {
      this.setMessage('Login efetuado com sucesso!', 'alert-success');
      setTimeout(() => this.router.navigate(['/admin']), 1200);
    } else {
      this.setMessage('Credenciais inválidas. Tente novamente.', 'alert-danger');
    }
  }
}
