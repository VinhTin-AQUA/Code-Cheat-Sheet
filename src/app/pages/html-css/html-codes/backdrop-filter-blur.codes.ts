export const backdropFilterBlur = [
    {
		id: 'backdrop-filter-blur',
		name: 'Backdrop filter blur',
		preview: `    <div id="background" style="background: url('https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                            height: 300px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-repeat: no-repeat;
                            background-size: cover;">
        <ul style="list-style: none;
                display: flex;
                gap: 10px;
                font-size: 1.2rem;
                font-family: monospace;
                color: white;
                backdrop-filter: blur(30px);
                padding: 15px 30px;
                border-radius: 8px;
                box-shadow: 0px 0px 30px rgba(227,228,237,0.37);
                border: 2px solid rgba(255, 255, 255,0.2);">
            <li>Home</li>
            <li>Price</li>
            <li>Contract</li>
        </ul>
    </div>`,
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `    <div id="background">
        <ul>
            <li>Home</li>
            <li>Price</li>
            <li>Contract</li>
        </ul>
    </div>`,
			},
			{
				name: 'CSS',
				language: 'css',
				code: `    #background {
      background: url('https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    ul {
      list-style: none;
      display: flex;
      gap: 10px;
      font-size: 1.2rem;
      font-family: monospace;
      color: white;
      backdrop-filter: blur(30px);
      padding: 15px 30px;
      border-radius: 8px;
      box-shadow: 0px 0px 30px rgba(227,228,237,0.37);
      border: 2px solid rgba(255, 255, 255,0.2);
    }`,
			},
		],
	},
]