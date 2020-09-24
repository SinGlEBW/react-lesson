import * as yup from 'yup';
/*######----<{ Обработка ошибок }>-----###### */
yup.setLocale({
  
  mixed: { 
    required: 'Пустое поле',
    default: ({label, originalValue, path, value})=>{
      return 'Какая-то ошибка'
    }
  },
  string: {
    required: 'Пустое поле',
		min: 'Мин ${min} символов',//предусмотрен такой вариант передать число.(не ES6, просто закос)
    max: ({path, max, value})=> { //детальное влияние на ошибку. path - там где происходит ввод 
      return `${path} не должен превышать ${max} символов`
  }},
  number: {
    min: ({ min }) => ({ key: 'field_too_short', values: { min } })
  }
})
/*-------------------------------------------------------------------------------*/
yup.addMethod(yup.string, 'minMaxReq', function (min, max){
	return this.min(min).max(max).required()
})
const phoneRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

export const schemaRegister = yup.object({
  login: yup.string().minMaxReq(6,15),
  pass: yup.ref('login'),
  name: yup.ref('login'),
  email: yup.string().required().email(),
  phone: yup.string().matches(phoneRegex, "Не верный телефон").required(),
  avatar: yup.string()
})

// ['login','pass','name','email','age', 'phone','avatar']