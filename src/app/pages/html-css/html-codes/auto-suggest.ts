export const autoSuggest = [
	{
		id: 'autoauto-suggest',
		name: 'Auto Suggest',
		preview: `<div>
                    <input type="text" list="languages" placeholder="Select" />
                    <datalist id="languages">
                        <option value="Java"></option>
                        <option value="Python"></option>
                        <option value="C#"></option>
                    </datalist>
                </div>`,
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `<div>
    <input type="text" list="languages" placeholder="Select" />
    <datalist id="languages">
        <option value="Java"></option>
        <option value="Python"></option>
        <option value="C#"></option>
    </datalist>
</div>`,
			},
		],
	},
];
