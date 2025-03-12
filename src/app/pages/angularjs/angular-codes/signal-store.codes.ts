export const signalStoreCodes = [
	{
		id: 'su-dung-signal-store',
		name: 'Sử dụng Signal Store',
		codeBlocks: [
			{
				name: 'Tải thư viện',
				language: 'shell',
				code: `    ng add @ngrx/signals@latest`,
			},
			{
				name: 'Tạo store',
				language: 'typescript',
				code: `    import { signalStore, withState } from '@ngrx/signals'; 
    import { Book } from '../models/book';

    type BooksState = { books: Book[]; isLoading: boolean; };

    const initialState: BooksState = {
        books: [], isLoading: false,
    };

    export const BooksStore = signalStore({ providedIn: 'root' }, withState(initialState));`,
			},
			{
				name: "{ providedIn: 'root' } cung cấp cho toàn bộ ứng dụng. Khi đó không cần cung cấp provider cho từng component như bên dưới",
				language: 'typescript',
				code: `    providers: [BookStore]`,
			},
			{
				name: 'Inject và sử dụng',
				language: 'typescript',
				code: `    export class BookComponent {
        store = inject(BooksStore);
        
        constructor() {}
        
        click() {
            this.store.books().push({
                title: 'a',
                author: 'a',
                published: new Date(),
            });
        }
    }`,
			},
		],
	},
	{
		id: 'cac-function-mo-rong',
		name: 'Các function mở rộng',
		codeBlocks: [
			{
				name: 'withMethods',
				language: 'typescript',
				code: `    // thêm các hàm mở rộng
    import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
    type LoaderState = {
        show: boolean;
    };
    const initialState: LoaderState = {
        show: false,
    };
    export const LoaderStore = signalStore(
        { providedIn: 'root' },
        withState(initialState),
        withMethods(store => ({
            onShow(flag: boolean): void {
                patchState(store, state => ({
                    show: flag,
                }));
            },
        }))
    )

    /*
    Trong hàm withMethod:
    o	store: bôi xanh là store của signalStore được định nghĩa
    o	onShow: là tên hàm tùy ý, có thể định nghĩa nhiều hàm khác nhau
    o	tham số của onShow định nghĩa tùy ý tùy vào nhu cầu
    o	patchState để thay đổi giá trị store
    o	tham số của patchState: store là store truyền vào từ tham số store bôi xanh, state là giá trị hiện tại của store
    */
        
    // gọi hàm
    export class NoticeComponent {
        loaderStore = inject(LoaderStore);
        onHide() {
            this.loaderStore.onShow(true);
        }
    }`,
			},
		],
	},
];