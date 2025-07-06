import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HtmlCssComponent } from './pages/html-css/html-css.component';
import { DockerComponent } from './pages/docker/docker.component';
import { NgrokComponent } from './pages/ngrok/ngrok.component';
import { FlutterComponent } from './pages/flutter/flutter.component';
import { PythonComponent } from './pages/python/python.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, title: 'List' },
    {
		path: 'docker/:id',
		component: DockerComponent,
		title: 'Docker',
	},
    {
        path: 'html-css/:id', component: HtmlCssComponent, title: 'HTML - CSS'
    },
    {
		path: 'ngrok/:id',
		component: NgrokComponent,
		title: 'Ngrok',
	},
    {
		path: 'flutter/:id',
		component: FlutterComponent,
		title: 'Flutter',
	},
    {
		path: 'python/:id',
		component: PythonComponent,
		title: 'Python',
	},
	{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];
