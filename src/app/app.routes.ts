import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DotNetComponent } from './pages/dot-net/dot-net.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, title: 'List' },
	{
		path: 'dot-net',
		loadChildren: () => import('./pages/dot-net/dotnet.routes').then(r => r.dotnetRoutes),
	},

	{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];
