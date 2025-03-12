

export const ngSelectCodes = [
	{
		id: 'su-dung-voi-form-module',
		name: 'Sử dụng với FormsModule',
		codeBlocks: [
			{
				name: 'Tải thư viện',
				language: 'shell',
				code: `    npm install --save @ng-select/ng-select`,
			},
            {
                name: 'Import',
                language: 'typescript',
                code: `    imports: [NgSelectModule, FormsModule]`
            },
            {
				name: 'Chuẩn bị dữ liệu',
				language: 'typescript',
				code: `    selectedCar: number;

    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];`,
			},
            {
                name: 'Sử dụng với thẻ option',
                language: 'html',
                code: `    <ng-select [(ngModel)]="selectedCar">
        @for (car of cars; track car.id) {
            <ng-option [value]="car.id">{{car.name}}</ng-option>
        }
    </ng-select>
`
            },
            {
                name: 'Sử dụng với items input',
                language: 'html',
                code: `    <ng-select [items]="cars" 
           bindLabel="name" 
           bindValue="id" 
           [(ngModel)]="selectedCar">
    </ng-select>`
            },
		],
	},
    {
		id: 'su-dung-voi-reactive-form-module',
		name: 'Sử dụng với reactive form module',
		codeBlocks: [
            {
                name: 'Import',
                language: 'typescript',
                code: `    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgSelectModule,
        NgLabelTemplateDirective,
        NgOptionTemplateDirective,
        NgSelectComponent,
    ],`
            },
            {
				name: 'Chuẩn bị dữ liệu',
				language: 'typescript',
				code: `    selectedCar: number;

    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];`,
			},
            {
                name: 'Form',
                language: 'typescript',
                code: `    this.addForm = this.formBuilder.group({
        bankCode: [17, [Validators.required]],
    });`
            },
            {
                name: 'Chuẩn bị dữ liệu, có thể lấy từ API',
                language: 'typescript',
                code: `    banks: any;
    this.bankService.getBanks().subscribe({
        next: (res: any) => {
            this.banks = res.data;
        },
    });`
            },
            {
                name: 'Sử dụng',
                language: 'html',
                code: `    <ng-select
        #bankCode
        class="bg-white py-1 px-3 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
        formControlName="bankCode"
        [items]="banks"
        bindLabel="shortName"
        bindValue="id"
        [multiple]="false"
        [clearable]="true"
    >
        <ng-template ng-option-tmp let-item="item">
            <div
                class="bg-white flex justify-start items-center gap-6 hover:bg-yellow-100 hover:text-red-800 hover:font-bold"
            >
                <div>
                    <img
                        class="w-24"
                        [src]="item.logo"
                        alt="No Logo "
                    />
                </div>

                <div class="text-[1rem]">
                    {{ item.shortName }}
                </div>
            </div>
        </ng-template>
    </ng-select>`
            },
            {
                name: 'Custom thẻ option',
                language: 'html',
                code: `    <ng-template ng-option-tmp let-item="item">
		<div
			class="bg-white flex justify-start items-center gap-6 hover:bg-yellow-100 hover:text-red-800 hover:font-bold"
		>
			<div>
				<img
					class="w-24"
					[src]="item.logo"
					alt="No Logo "
				/>
			</div>

			<div class="text-[1rem]">
				{{ item.shortName }}
			</div>
		</div>
	</ng-template>`
            },
            {
                name: 'Thêm #bankCode tham chiếu ViewChild',
                language: 'typescript',
                code: `    @ViewChild('bankCode', { static: false }) bankCode!: NgSelectComponent;`
            },{
                name: 'Một số thao tác với #bankCode',
                language: 'typescript',
                code: `    // scroll
    this.bankCode.element.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // focus
    this.bankCode.element.focus();

    // Thêm các class
    this.bankCode.element.classList.add('focus:border-red-500/50', 'focus:ring-red-400');`
            },
		],
	},
];



