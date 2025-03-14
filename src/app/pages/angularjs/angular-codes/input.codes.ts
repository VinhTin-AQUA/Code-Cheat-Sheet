export const inputCodes = [
	{
		id: 'ngan-chan-in-put-number',
		name: 'Ngăn chặn nhập số trong input',
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `    <input id="input-numbrt" (keydown)="preventInvalidInput($event)" type="number">`,
			},
            {
				name: 'CSS',
				language: 'css',
				code: `    
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Đối với Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }

    #input-numbrt {
        @apply border-2 rounded-md outline-none py-1 px-2;
    }`,
			},
            {
				name: 'TS',
				language: 'typescript',
				code: `    preventInvalidInput(event: KeyboardEvent): void {
		// Nếu ký tự là 'e', '+', '-', hoặc '.'
		if (['e', 'E', '+', '-'].includes(event.key)) {
			event.preventDefault();
		}
	}`,
			},
		],
	},
];