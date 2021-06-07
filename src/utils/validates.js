

export let required = (val, valOb) => {
	console.dir(val);

	const errors = {}
	if (val && !val.login) 
		errors.login = 'Поле не заполнено'
	if (val && !val.pass) 
    errors.login = 'Поле не заполнено'
  

	// } else if (login.length > 5) {
	// 	errors.login = 'Must be 15 characters or less'
	// }
	// if (!pass) {
	// 	errors.pass = 'Required'
	// } else if (login.length > 15) {
	// 	errors.pass = 'Must be 15 characters or less'
	// }
	return errors
}

export const required1 = (value) => {
	return (value && typeof value === 'string' ? undefined : 'Поле не заполнено')
};
