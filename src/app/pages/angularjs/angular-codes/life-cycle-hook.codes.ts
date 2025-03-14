export const lifeCycleHook = [
    {
        id: 'ng-onchanges',
        name: 'ngOnChanges - được gọi mỗi khi giá trị của một @Input() thay đổi',
        codeBlocks: [{
            name: '',
            language: 'typescript',
            code: `    @Input() preview: string = '';
    ngOnChanges(changes: SimpleChanges) {
        if (changes['preview']) {
            console.log('changed');
        }
    }
            `
        }]
    }
]