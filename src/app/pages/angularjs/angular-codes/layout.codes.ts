export const layoutCodes = [
	{
		id: 'pinterest-layouts',
		name: 'Pinterest layouts',
		codeBlocks: [
			{
				name: 'Link tham khảo',
				language: 'text',
				code: `    https://dev.to/hungle00/build-a-masonry-layout-pinterest-layout-3glp?fbclid=IwAR3z4viDmb_5yCpudf0KsYWOScDWM7h3KXqPkxYhasutyANAgHuahGDj4BY`,
			},
			{
				name: 'CSS columns approach',
				language: 'css',
				code: `    /* container */
    .board-grid {
        column-count: 4;
        column-gap: 1em;
    }
        
    /* item */
    .item {
        -webkit-column-break-inside: avoid;
        break-inside: avoid;
        page-break-inside: avoid;
    }`,
			},

			{
				name: 'CSS columns approach using Tailwind css',
				language: 'html',
				code: `    <div class="columns-2 md:columns-3 lg:columns-4 gap-6">
        <div class="break-inside-avoid mb-2">
            <img src="https://i.pinimg.com/564x/77/c8/d4/77c8d48eccb8ae095a3c3ce24b2fce8e.jpg" alt="">
        </div>
    </div>`,
			},
			{
				name: 'CSS grid approach',
				language: 'css',
				code: `    .board-grid {
        display: grid;
        grid-template-columns: repeat (auto-fill, 300px);
        grid-auto-rows: 20px;
        grid-gap: 10px;
    }

    item{
        grid-row-end: span 10;
    }`,
			},
		],
	},
	{
		id: 'reactive-sidebar-header',
		name: 'Reactive sidebar-header-submenu',
		codeBlocks: [
			{
				name: 'Html',
				language: 'html',
				code: `    <div class="h-screen">
        <aside
            id="default-sidebar"
            class="transition-all duration-500"
            [ngClass]="{
                'w-[300px]': showSidebar === true,
                'w-0': showSidebar === false
            }"
            aria-label="Sidebar"
        >
            <div class="h-full">
                <div
                    id="menu-sidebar"
                    class="w-full h-screen py-4 overflow-y-scroll bg-zinc-900 overflow-x-hidden"
                >
                    <ul class="space-y-2 font-medium">
                        @for (item of dotnetMenus; track $index) {

                        <li>
                            @if(item.linkToDrive) {
                            <a
                                [href]="item.linkToDrive"
                                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-zinc-900 group"
                            >
                                <span class="flex-1 ms-3 whitespace-nowrap">{{ item.name }}</span>
                            </a>
                            } @else if (item.url) {} @else {
                            <button
                                (click)="onShowSubMenu(item)"
                                class="cursor-pointer flex items-center w-full p-2 pe-6 text-base text-white transition duration-75 rounded-lg hover:bg-gray-100 hover:text-zinc-900"
                            >
                                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{
                                    item.name
                                }}</span>
                                <svg
                                    class="w-3 h-3"
                                    [ngClass]="{ 'rotate-180': item.showSubMenu }"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            
                            @if(item.showSubMenu) {
                            <ul
                                @submenuAnimation
                                class="text-[0.85rem] space-y-2 transition-all duration-500 overflow-hidden"
                            >
                                @for (submenu of item.subMenus; track $index) {
                                <li>
                                    <a
                                        [routerLink]="'/dot-net/' + submenu.id"
                                        class="flex items-center w-full p-2 rounded-lg pl-11 group text-white hover:bg-gray-100 hover:text-zinc-900"
                                        >{{ submenu.name }}</a
                                    >
                                </li>
                                }
                            </ul>
                            } }
                        </li>
                        }
                    </ul>
                </div>

                <!-- <div class="flex-1" (click)="onShowSideBar(false)"></div> -->
            </div>
        </aside>
    </div>`,
			},
			{
				name: 'CSS',
				language: 'css',
				code: `    .active {
        color: oklch(0.448 0.119 151.328);
    }

    #menu-sidebar::-webkit-scrollbar {
        width: 2px; /* width of the entire scrollbar */
        height: 2px;
    }

    #menu-sidebar::-webkit-scrollbar-track {
        background: #fff; /* color of the tracking area */
    }

    #menu-sidebar::-webkit-scrollbar-thumb {
        background: oklch(0.448 0.119 151.328); /* color of the scroll thumb */
    }

    #menu-sidebar::-webkit-scrollbar-thumb:hover {
        background: black; /* color of the scroll thumb on hover */
    }`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    import { CommonModule } from '@angular/common';
    import { Component, Input } from '@angular/core';
    import { dotnetMenus } from './menus';
    import { animate, style, transition, trigger } from '@angular/animations';
    import { RouterLink } from '@angular/router';

    @Component({
        selector: 'app-side-bar',
        imports: [CommonModule, RouterLink],
        templateUrl: './side-bar.component.html',
        styleUrl: './side-bar.component.scss',
        animations: [
            trigger('submenuAnimation', [
                transition(':enter', [
                    style({ height: '0px', opacity: 0 }),
                    animate('300ms ease-out', style({ height: '*', opacity: 1 })),
                ]),
                transition(':leave', [animate('300ms', style({ height: '0px', opacity: 0 }))]),
            ]),
        ],
    })
    export class SideBarComponent {
        @Input() showSidebar: boolean = true;
        show = true;
        dotnetMenus: any = dotnetMenus;

        constructor() {}

        ngOnInit() {
            for (let i of dotnetMenus) {
                i.showSubMenu = false;
            }
        }

        onShowSubMenu(item: any) {
            if (item.showSubMenu === null || item.showSubMenu === undefined) {
                return;
            }
            item.showSubMenu = !item.showSubMenu;
        }
    }`,
			},
		],
	},
];