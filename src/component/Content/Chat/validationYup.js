import * as yup from 'yup';

yup.setLocale({
	mixed: {
		required: 'Пустое поле',
		default: function(...a) {
			return 'Какая-то ошибка'
		},
		oneOf: (a)=>{
			console.dir(a);
		},
		notType: 'Не верный тип данных',
		
	},
	string: {
		min: ({ path, min, ...a }) => {
			return `мин ${min} символов `
		},

	},
	number: {
		min: ({ path, min }) => `${path} мин ${min} символов `,
		// max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
		positive: 'Число не должно быть отрицательным',
		integer: 'Только целые числа'
	}
})
yup.addMethod(yup.string, 'valString', function(){
	return this.min(5).max(15).required()
})
export const authChatSchema = yup.object({
	login: yup.string().valString(),
	password: yup.string().valString(),
	age: yup.number().required().positive().integer().min(3).max(9),
	field: yup.string(),

	// email: yup.string().email('Поле должно соответствовать email'),
})

