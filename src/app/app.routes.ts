import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DotNetComponent } from './pages/dot-net/dot-net.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'List' },
  { path: 'dot-net/:id', component: DotNetComponent, title: '.NET' },
  { path: 'dot-net', component: DotNetComponent, title: '.NET' },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
