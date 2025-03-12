

export const ngxQuill = [
	{
		id: 'su-dung-ngx-quill',
		name: 'Sử dụng NgxQuill',
		codeBlocks: [
			{
				name: 'Tải thư viện',
				language: 'shell',
				code: `    npm i ngx-quill`,
			},
            {
                name: 'Import',
                language: 'typescript',
                code: `    import { QuillModule } from 'ngx-quill'
    imports: [QuillModule, FormsModule]`
            },
            {
				name: 'Cấu hình toolbar',
				language: 'typescript',
				code: `    modules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
      
          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction
      
          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],
      
          ['clean'],                                         // remove formatting button
      
          ['link', 'image', 'video']                         // link and image, video
        ]
      };`,
			},
            {
                name: 'Html',
                language: 'html',
                code: `    <div class="editor-container">
    <quill-editor
        class="w-screen border"
        [modules]="modules"
        [(ngModel)]="editorContent"
    ></quill-editor>
    </div>`
            },
            {
                name: 'Trong angular.json import',
                language: 'json',
                code: `    "styles": [
        "src/styles.css",
        "node_modules/quill/dist/quill.snow.css",
        "node_modules/quill/dist/quill.bubble.css",
        "node_modules/quill/dist/quill.core.css"
    ],`
            },
		],
	},
    
];



