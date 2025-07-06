export const imgPreview = [
	{
		id: 'img-preview',
		name: 'Img Preview',
		preview: `<div>
                    <img id="img" style="max-width: 150px" />
                    <input type="file" onchange="img.src = window.URL.createObjectURL(this.files[0])" />
                </div>`,
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `<div>
    <img id="img" style="max-width: 150px" />
    <input type="file" onchange="img.src = window.URL.createObjectURL(this.files[0])" />
</div>`,
			},
		],
	},
];
