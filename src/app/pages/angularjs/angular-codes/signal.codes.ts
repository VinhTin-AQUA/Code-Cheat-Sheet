export const signalCodes = [
	{
		id: 'khai-bao-signal',
		name: 'Khai báo Signal',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `    numberSignal = signal(1);`,
			},
		],
	},
	{
		id: 'lay-gia-tri-signal',
		name: 'Lấy giá trị Signal',
		codeBlocks: [
			{
				name: '',
				language: 'html',
				code: `    <h3>{{numberSignal()}}</h3>`,
			},
		],
	},
	{
		id: 'set-va-update',
		name: 'Set và Update',
		codeBlocks: [
			{
				name: 'Html',
				language: 'typescript',
				code: `    <button (click)="numberSignal.set(2)">Click</button>`,
			},
			{
				name: 'Set',
				language: 'typescript',
				code: `    onClick() {
        this.numberSignal.set(10);
    }`,
			},
			{
				name: 'Update',
				language: 'typescript',
				code: `    onClick() {
        this.numberSignal.update((m) => m + 1);
    }`,
			},
		],
	},
	{
		id: 'computed-signals',
		name: 'Computed signals',
		codeBlocks: [
			{
				name: 'Khi signal thay đổi thì Compute signal cũng thay đổi theo',
				language: 'text',
				code: `   `,
			},
			{
				name: 'Khai báo',
				language: 'typescript',
				code: `    numberSignal = signal(1); // signal
    doubleCount: Signal<number> = computed(() => this.numberSignal() * 2); //  Computed signal

    // chỉ cần thay đổi signal thì doubleCount sẽ được thay đổi theo cách được định nghĩa bên trong computed
    onClick() {
        this.numberSignal.update((m) => m + 1);
    }
`,
			},
		],
	},
];