export const reactiveFormCodes = [
	{
		id: 'dat-trang-thai-dirty-cua-control-trong-form-group',
		name: 'Đặt trạng thái dirty của control trong form group',
		codeBlocks: [
			{
				name: 'Code',
				language: 'typescript',
				code: `    // đặt dirty thành true
    this.registerForm.controls['reEnterPassword'].markAsDirty({
        onlySelf: true,
    });
    
    // đặt thành dirty thành false
    this.registerForm.controls['reEnterPassword'].markAsPristine({
        onlySelf: true,
    });`,
			},
		],
	},
	{
		id: 'reset-value',
		name: 'Reset value',
		codeBlocks: [
			{
				name: 'Code',
				language: 'typescript',
				code: `    // Để đặt lại giá trị của formGroup về giá trị ban đầu, bạn có thể sử dụng phương thức .reset() của formGroup. Tuy nhiên, phương thức này sẽ đặt lại tất cả các giá trị trong formGroup thành giá trị rỗng
    // => có thể gây ra lỗi validate form

    //Sử dụng setValue
    this.formHotelSubmit.controls['hotelName'].setValue(this.hotel.HotelName);
    this.formHotelSubmit.controls['address'].setValue(this.hotel.Address);
    this.formHotelSubmit.controls['description'].setValue(this.hotel.Description);`,
			},
		],
	},
];