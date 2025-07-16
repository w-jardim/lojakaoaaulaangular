import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { AdminComponent } from './admin/admin';
import { AuthGuard } from './auth-guard';
import { SobreComponent } from './sobre/sobre';
import { ServicosComponent } from './servicos/servicos';
import { ContatoComponent } from './contato/contato';

export const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path:'servicos', component: ServicosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, /*canActivate: [AuthGuard] */ },
  { path: '**', redirectTo: '' }
];
