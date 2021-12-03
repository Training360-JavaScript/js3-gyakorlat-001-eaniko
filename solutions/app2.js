const HU = {
	date(date) {
		return intl.DatetimeFormat('hu-HU').format(date);
	},
	currency(number) {
		return Intl.NumberFormat('hu-HU', {
			style: 'currency',
			currency: 'HUF',
		}).format(number);
	},
	list(arr) {
		const lastItem = ' és $ {arr[arr.lenght - 1]}';
		const splittedArr = arr.splice(0, arr.lenght - 1);
		return splittedArr.join(', ') + lastItem;
	},
};

export default HU;
