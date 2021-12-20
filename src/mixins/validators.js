import {
	required,
	minLength,
	minValue,
	maxValue,
	email,
	maxLength,
} from '@vuelidate/validators';

const checkIdentityNumber = (val) => {
	if (!val) return true;

	val = String(val);
	let isEleven = /^[0-9]{11}$/.test(val);
	let totalX = 0;
	for (let i = 0; i < 10; i++) {
		totalX += Number(val.substr(i, 1));
	}
	let isRuleX = totalX % 10 == val.substr(10, 1);
	let totalY1 = 0,
		totalY2 = 0;
	for (let i = 0; i < 10; i += 2) {
		totalY1 += Number(val.substr(i, 1));
	}
	for (let i = 1; i < 10; i += 2) {
		totalY2 += Number(val.substr(i, 1));
	}
	let isRuleY = (totalY1 * 7 - totalY2) % 10 == val.substr(9, 0);
	return isEleven && isRuleX && isRuleY;
};

const checkHashCode = (val) => {
	if (!val) return true;

	const regex =
		/^[A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9]-[A-Z0-9][A-Z0-9][A-Z0-9][A-Z0-9]-[A-Z0-9][A-Z0-9]$/g;

	return regex.test(val);
};

const checkExpiryDate = (val) => {
	if (!val) return true;

	let month = val.slice(0, 2);
	let slash = val.slice(2, 3);
	let year = val.slice(3);

	if (isNaN(+month) || isNaN(+year)) {
		return false;
	}

	if (+month > 12 || +month < 1) {
		return false;
	}

	if (slash !== '/') {
		return false;
	}
	if (+year < 21 || +year > 30) {
		return false;
	}
	return true;
};

export default {
	data() {
		return {
			city: 'Dhaka',
			guestForm: {
				name: '',
				surName: '',
				gender: 'Male',
				age: '',
				email: '',
				tel: '',
				identityNumber: '',
				hashCode: '',
			},
			creditCard: {
				fullName: '',
				cardNumber: '',
				expiryDate: '',
				cvvNumber: '',
			},
		};
	},
	validations: {
		city: {
			required,
			minLength: minLength(3),
		},
		guestForm: {
			name: {
				required,
				minLength: minLength(3),
			},
			surName: {
				required,
				minLength: minLength(3),
			},
			age: {
				required,
				minValue: minValue(15),
				maxValue: maxValue(70),
			},
			email: {
				required,
				email,
			},
			tel: {
				required,
				minLength: minLength(11),
			},
			gender: {
				required,
			},
			identityNumber: {
				required,
				checkIdentityNumber,
			},
			hashCode: {
				required,
				checkHashCode,
			},
		},
		creditCard: {
			fullName: {
				required,
				minLength: minLength(3),
			},
			cardNumber: {
				required,
				minLength: minLength(16),
				maxLength: maxLength(16),
			},
			expiryDate: {
				required,
				checkExpiryDate,
			},
			cvvNumber: {
				required,
				minLength: minLength(3),
				maxLength: maxLength(3),
			},
		},
	},
};
