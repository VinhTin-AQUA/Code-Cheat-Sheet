export const imageRatioCodes = [
	{
		id: 'image-ratio',
		name: 'Image ratio',
		preview: `    <div class="flex justify-center">
        <div style="width: 50%; aspect-ratio: 16/9; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1734983234384-5a3edcec48ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>
    </div>`,
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `    <div class="flex justify-center">
        <div class="image-container">
            <img style="width: 100%; height: 100%; object-fit: cover;" src="/assets/cat.jpg" alt="">
        </div>
    </div>`,
			},
			{
				name: 'CSS',
				language: 'css',
				code: `    .image-container {
        width: 50%;
        aspect-ratio: 16/9;
        overflow: hidden;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`,
			},
		],
	},
];
