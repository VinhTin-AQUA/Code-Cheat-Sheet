import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularjsComponent } from './pages/angularjs/angularjs.component';
import { DotNetComponent } from './pages/dot-net/dot-net.component';
import { HtmlCssComponent } from './pages/html-css/html-css.component';
import { BotComponent } from './pages/bot/bot.component';
import { DockerComponent } from './pages/docker/docker.component';
import { NginxComponent } from './pages/nginx/nginx.component';
import { NgrokComponent } from './pages/ngrok/ngrok.component';
import { FlutterComponent } from './pages/flutter/flutter.component';
import { NestjsComponent } from './pages/nestjs/nestjs.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, title: 'List' },
	{
		path: 'dot-net/:id',
		component: DotNetComponent,
		title: 'Net Core',
	},
	{
		path: 'angular-js/:id',
		component: AngularjsComponent,
		title: 'Angular',
	},
    {
		path: 'bot/:id',
		component: BotComponent,
		title: 'Bot',
	},
    {
		path: 'docker/:id',
		component: DockerComponent,
		title: 'Docker',
	},
    {
		path: 'nginx/:id',
		component: NginxComponent,
		title: 'Nginx',
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
		path: 'nestjs/:id',
		component: NestjsComponent,
		title: 'nestjs',
	},
	{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];
