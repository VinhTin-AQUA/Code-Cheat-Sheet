export const requirementCodes = [
	{
		id: 'requirement',
		name: 'Requirement Jupiter',
		codeBlocks: [
			{
				name: 'Tạo file requirements.txt với nội dung:',
				language: 'text',
                code: `    numpy==1.19.5
    pandas>=1.1.0,<2.0.0
    scikit-learn==0.24.1
    matplotlib
    seaborn>=0.11.1
    tensorflow==2.4.0`
			},
            {
				name: 'Lệnh cài đặt',
				language: 'text',
                code: `    pip install -r requirements.txt`
			},
            {
				name: 'Liệt kê gói',
				language: 'text',
                code: `    pip freeze > requirements.txt`
			},
		],
	},
];
