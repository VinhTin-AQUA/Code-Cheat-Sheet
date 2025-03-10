import { Component } from '@angular/core';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { HeaderComponent } from '../components/header/header.component';
import { duongDanDenThuMucDacBietCuaHeThong } from './data/dot-net/file/duong-dan-den-thu-muc-dac-biet-cua-he-thong';
import { layTatCaFileVaThuMucConTrongThMucCha } from './data/dot-net/file/lay-tat-ca-file-va-thu-muc-con-trong-thu-muc-cha';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-dot-net',
	imports: [SideBarComponent, HeaderComponent],
	templateUrl: './dot-net.component.html',
	styleUrl: './dot-net.component.scss',
})
export class DotNetComponent {
	showSidebar: boolean = true;

	content: string = ``;
	id: string = '';

	duongDanDenThuMucDacBietCuaHeThong = duongDanDenThuMucDacBietCuaHeThong;
	layTatCaFileVaThuMucConTrongThMucCha = layTatCaFileVaThuMucConTrongThMucCha;

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.content = this.layTatCaFileVaThuMucConTrongThMucCha;

		this.activatedRoute.params.subscribe({
			next: (params: any) => {
				// console.log(params); // {id: '2', name: 'hoc'}
                if(params.id) {
                    if (params.id === 'duong-dan-den-thu-muc-dac-biet-cua-he-thong') {
                        this.content = duongDanDenThuMucDacBietCuaHeThong;
                    } else if (params.id === 'lay-tat-ca-file-va-thu-muc-con-trong-thu-muc-cha') {
                        this.content = layTatCaFileVaThuMucConTrongThMucCha;
                    }
                } else {
                    this.content = duongDanDenThuMucDacBietCuaHeThong;
                }
			},
		});
	}

	receiveData(data: boolean) {
		this.showSidebar = data;
	}
}
