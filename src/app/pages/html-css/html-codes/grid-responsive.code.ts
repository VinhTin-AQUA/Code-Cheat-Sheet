export const gridResponsiveCodes = [
	{
		id: 'grid-responsive',
		name: 'Grid Responsive',
		preview: `    <div class="" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px,1fr)); gap: 1rem; ">
        <div class="item" style="background-color: red;">1</div> 
        <div class="item" style="background-color: red;">2</div> 
        <div class="item" style="background-color: red;">3</div> 
        <div class="item" style="background-color: red;">4</div> 
        <div class="item" style="background-color: red;">5</div> 
        <div class="item" style="background-color: red;">6</div> 
        <div class="item" style="background-color: red;">7</div> 
        <div class="item" style="background-color: red;">8</div> 
    </div> `,
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `    <div class="wrapper"></div> 
        <div class="item"">1</div> 
        <div class="item">2</div> 
        <div class="item">3</div> 
        <div class="item">4</div> 
        <div class="item">5</div> 
        <div class="item">6</div> 
        <div class="item">7</div> 
        <div class="item">8</div> 
    </div> `,
			},
			{
				name: 'CSS',
				language: 'css',
				code: `    .wrapper { 
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(200px,1fr)); 
        gap: 1rem; 
    } 
    .item { 
        background-color: red; 
    } `,
			},
		],
	},
];
