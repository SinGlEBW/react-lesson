/*eslint-disable*/
import Formik, { Field } from 'formik';
/*
  Formik собственные методы в props. 
  onSubmit={(value, objectFormic) => {}} - исполнитель handleSubmit. Настройка события отправки
  validate={(value) => {}} - исполнитель handleChange. Настройка события изменения ввода
  validationSchema={(value) => {}} - исполнитель так же handleChange, но props работает с Yup валлидатором
  validateOnBlur={(value) => {}} - исполнитель handleBlur.Событие на потерю фокуса
*/
/*
  touched - при взаимодействии с полями формы отмечает у себя объект ключ=имя поля - value=bool
            относительно этого объекта удобно выводить ошибки. Объект errors заполниться, но выведем
            то поле с которым щас взаимодействовали, на не все ошибки

  getFieldProps('login') - возвращает объект атрибутов указанного поля. name,onBlur,onChange, value
                           вместо указания 4х атрибутов можно указать так 
                           {...getFieldProps('login')}
  isSubmitting - true если без ошибок. При ошибках быстро переходит с true на false 
  isValid - является ли валидным
  dirty - есть ли где нибудь заполнение
  выключить кнопку пока не будут заполнены данные без ошибок
  {!formik.isValid || !formik.dirty}
  выключить так же после нажатия
  {!formik.isValid || !formik.dirty || formik.isSubmitting}
 */
<Formik onSubmit={(val, obFormik) => {}}>
{
  (oFormik) => (//Принимает свои props и свои несколько событий
  //Все props описанные в component Formic попадают в основной callback 
    <form >
      <input type="email" name="email" onChange={oFormik.handleChange} onBlur={oFormik.handleBlur} value={oFormik.values.email} />
			<p>{oFormik.touched.email && oFormik.errors.email}</p>
      <button type="submit" disabled={oFormik.isSubmitting}>Submit</button>
    </form> 
  )
}

</Formik >;

/* 
  -HOOK useFormik - работа с хуком обёрткой
  Вариант через хуки. 
  Так же как и в 1м варианте, только не нужно оборачивать в компоненте Formik и использовать его 
  callback. Как обычный hook построить за пределами jsx 
*/
const Component1 = (props) => {
  const hForm = useFormik({
    initialValues: { login: '', password: '', email: '' },
    validate: (value) => {
      const errors = {};
      if(!value.password) errors.password = 'Введите пароль'
      else
      if(value.password.length > 0 && value.password.length < 5)
        errors.password = 'Пароль слишком короткий'
      return errors
    },
    
    onSubmit: props.formButtonBehavior //построить логику
  })
  
  return (
    <form onSubmit={hForm.handleSubmit}>
      <input name="password" type="password" onChange={hForm.handleChange} value={hForm.values.password} />
      <p>{hForm.touched.password && hForm.errors.password }</p>
      <button type="submit" disabled={hForm.isSubmitting}>Submit</button>
    </form>
  )
}
//Подключение Yup валидатора
const schema = Yup.object(
  {
    email: yup.string().email('Не верный email').required('Поле не должно быть пустым'),
    password: yup.string()
              .min(5, 'Придумайте пароль мин 5 символов')
              .max(15, 'Логин превышает 15 символов').required('Поле не должно быть пустым'),
  })

const Component2 = (props) => {
  const hForm = useFormik({
    initialValues: { login: '', password: '', email: '' },
    //если оставить validate то он будет более приоритетный для handleChange
    validationSchema: schema,
    
    onSubmit: props.formButtonBehavior //построить логику
  })
  
  return (
    <form onSubmit={hForm.handleSubmit}>
      <input type="email" {...getFieldProps('email')} />
      <p>{hForm.touched.email && hForm.errors.email }</p>
      <input type="password" {...getFieldProps('password')} />
      <p>{hForm.touched.password && hForm.errors.password }</p>
      <button type="submit" disabled={hForm.isSubmitting}>Submit</button>
    </form>
  )
}

/*
  C getFieldProps() код стал ещё короче, но разработчики пошли дальше и с помощью React.createContext спрятали часть props
*/

<Formik initialValues={{ email: '', password: '' }} 
				validationSchema={schema}
				onSubmit={props.formButtonBehavior}>//не забываем что этот props от formik, 2 аргумента
  {
    ({ isSubmitting }) => (//получить объект Formik, обернуть в cb:?
      <Form>//не надо указывать handleSubmit
        
        <Field as='textarea' name="textarea" />
        <ErrorMessage name="textarea" component="div" />
        <Field as="select" name="select">
          <option>Один</option>
        </Field>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit" disabled={isSubmitting}>Submit</button>//получили
      </Form>
    )
  }
</Formik>
/*
  Field параметры
    type - только к input
    as='textarea', select, button - вместо type
    Так же вместо as указывается везде где требуется использовать объект стилизации

  ErrorMessage параметры 
    component - принимает как имя тега HTML так и компонент
    так же между тегом ErrorMessage можно засунуть cb
  Material-UI
  const MyStyledInput = styled(Input)({
	padding: '.5em',
	border: '1px solid #eee'
})
<Field as={MyStyledInput} name="password" />

Вообщем уже смотреть как работать с Material-UI
*/

/*--HOOK useField - создание своего поля 
  Если требуется создать собственное поле, то для это есть хук.Запихать его в тело <Form>
  useField возвращает массив 
  0. это getFieldProps, 
  1. объект meta - часть объекта Formik, 
  2. объект с set методами
*/

const MyInput = ({label, ...props}) => {
	
	const [field, meta] = useField(props);
	return (
		<>
    //так же вместо оригинальных тегов можно возвращать теги обработанные в Material-UI 
			<p><label htmlFor={props.id || props.name}>{label}</label></p>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error && <div className="error">{meta.error}</div>}
		</>
	);
};
// код не полный. сократил, чтоб не повторяться 
<Formik>
  <Form>
    <MyInput name='login' label='Логин'/>
    <MyInput name='password' label='Пароль'/>
  </Form>
</Formik>
/*
  Такой подход удобен тем что не приходиться плодить 
  <Field type='text' name="login" />
  <ErrorMessage name="login" component="div" />
  ...
*/
/*Самый короткий вариант*/
const MyInput1 = ({label, ...props}) => (
  <>
    <p><label htmlFor={props.id || props.name}>{label}</label></p>
    <Field {...props}/>
    <ErrorMessage name={props.name} component='div'/> 
  </>
);

/*
  Если использовать Yup и возвращать ошибки через setLocale в виде объекта а не строки,
  то придётся ловить в ручную через meta. let [field, meta] = useField(props).
  ErrorMessage надеяться что в meta.errors стока и тогда придётся в ручную делать вывод ошибки.
  Лучше подготовить правильную строку на основе параметров cb метода min и подобных ему                                                                                       
*/
yup.setLocale({
	number: {
    min: ({ min }) => ({ key: 'field_too_short', values: { min } }),
  }
})