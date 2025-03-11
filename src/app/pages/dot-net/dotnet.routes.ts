import { Routes } from '@angular/router';
import { DotNetComponent } from './dot-net.component';
import { FileDirectoryComponent } from './file-directory/file-directory.component';

export const dotnetRoutes: Routes = [
	{
		path: '',
		component: DotNetComponent,
		children: [
			{ path: '', redirectTo:'file-directory', pathMatch: 'full' },
			{ path: 'file-directory', component: FileDirectoryComponent, title: 'File và Thư mục' },
            { path: '**', redirectTo: 'file-directory' }
		],
	},
];
