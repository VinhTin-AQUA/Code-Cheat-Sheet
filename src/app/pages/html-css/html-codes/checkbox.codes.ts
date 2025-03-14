export const checkBoxCodes = [
	{
		id: 'doi-mau-checkbox',
		name: 'Đổi màu checkbox khi tick true',
		preview: `    <input type="checkbox" style="accent-color: red;">`,
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `    <input type="checkbox">`,
			},
			{
				name: 'CSS',
				language: 'css',
				code: `    input[type='checkbox'] {
        accent-color: red;
    }`,
			},
		],
	},
	{
		id: 'doi-kich-thuoc-checkbox',
		name: 'Đổi kích thước checkbox',
		preview: `    <input type="checkbox" style="-ms-transform: scale(1); 
        -moz-transform: scale(1);
        -webkit-transform: scale(1); 
        -o-transform: scale(1); 
        transform: scale(2);
        background-color: red;
    ">`,
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `    <input type="checkbox">`,
			},
			{
				name: 'CSS',
				language: 'css',
				code: `    input[type='checkbox'] {
        /* Double-sized Checkboxes */
        -ms-transform: scale(1); /* IE */
        -moz-transform: scale(1); /* FF */
        -webkit-transform: scale(1); /* Safari and Chrome */
        -o-transform: scale(1); /* Opera */
        transform: scale(1.5);
        background-color: red;
    }`,
			},
		],
	},
];
