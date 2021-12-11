export default {
	data() {
		return {
			currency: 'BDT',
		};
	},
	methods: {
		changeCurrencyHandler(cur) {
            console.log(cur);
			this.currency = cur;
		},
	},
	computed: {
		isUSD() {
			return this.currency === 'USD';
		},
		isBDT() {
			return this.currency === 'BDT';
		},
	},
};
