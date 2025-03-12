export const jwtDecodeCodes = [
	{
		id: 'jwt-decode',
		name: 'Jwt Decode',
		codeBlocks: [
			{
				name: 'Tải thư viện',
				language: 'shell',
				code: `    npm install jwt-decode`,
			},
			{
				name: 'Sử dụng',
				language: 'typescript',
				code: `    import { jwtDecode } from "jwt-decode";

    const token = "eyJ0eXAiO.../// jwt token";
    var decoded:any = jwtDecode(token);

    var email = decoded.email;
`,
			},
		],
	},
];
