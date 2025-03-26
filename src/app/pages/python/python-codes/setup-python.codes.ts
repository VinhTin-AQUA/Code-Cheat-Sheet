export const setupPython = [
	{
		id: 'setup-python',
		name: 'Setup Python',
		codeBlocks: [
			{
				name: 'Window',
				language: 'shell',
				code: `    python -m venv .venv
    .venv\\Scripts\\activate
    pip install jupyterlab`,
			},
            {
				name: 'Linux',
				language: 'shell',
				code: `    python3 -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt`,
			},
		],
	},
];
