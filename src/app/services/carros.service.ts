// carros.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Carro {
  imagem: string;
  marca: string;
  modelo: string;
  ano: number;
  preco: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  private apiUrl = 'http://localhost:3000/carros'; // ajuste conforme sua API

  constructor(private http: HttpClient) {}

  getCarros(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.apiUrl);
  }
}
