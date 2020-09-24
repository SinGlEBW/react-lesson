import { bool } from 'prop-types';
/*eslint-disable*/
import { Field, reducer as formReducer, reduxForm, propTypes} from 'redux-form'
//propTypes хоть он не находит, но он там есть
//1. помещаем в объект со всеми reducer в combineReducers
{
  form: formReducer
}

/*
  2. formRedux вызывается как HOC, в файле где форма, передаём параметры и результат экспортируется
     родителю. Если вызвать в ко Container и передавать ниже, то метод onSubmit который 
     требуется redux-form придётся или в options объявлять или на голову выше родителя создавать. 
*/

//props пополнится методами redux-form. В дальнейшем props - основного компонента (ОК)
let login = (propsOK) => {
  let { handleSubmit, submitting, pristine, reset } = propsOK;
  return (
    <form onSubmit={ handleSubmit }>
      <Field  component='input' type='password'/>
      <button type="submit" disabled={pristine || submitting}> Submit </button>
    </form>
  )
}
export default formRedux({
  form: 'имя формы'
})
/*
  3. в родителе вызываем компонент и передаём пропс названный onSubmit
    Как работает redux-form.
      onChange скрыт в Field, заполняя данными локальный state
      при клике handleSubmit должен передать данные в метод который мы ему
      передаём под именем пропс onSubmit. onSubmit передаёт данные как объект JSON .
*/

let parent = (props) => {
  let method = (val) => {}
  return <Login onSubmit={ method }/>
}

propNamespace
 
/*----------------------------------------------------------------------------- */
//можно из родителя передавать эти методы, главное чтобы props были так же названы
formRedux({
  asyncChangeFields:['login', 'pass'],//asyncValidate будет запускаться на каждое нажатие в данных полях
  asyncBlurFields: ['login', 'pass'],//asyncValidate получит данные после потери фокуса. см.ниже
  asyncValidate,// асинхронная валидация. в спарке с asyncBlurFields меняется режим. см.ниже
  destroyOnUnmount: bool,//По ум. true удаляет значения из формы когда компонент отключён (перешли на другую страницу)
  forceUnregisterOnUnmount:bool,/*По.ум. false. Переход со страницы обратно на форму Отменяет заполнение формы данными из 
                                  объекта initialValues. Заполнит теми же данными которые были установлены пользователем
                                  если дополнительно установлен метод destroyOnUnmount: false который не удаляет хранилище данных*/
  form:"",//* обязательный. просто имя формы
  getFormState: (state) => {},//не понял зачем мне понадобиться изменять state
  immutableProps:[],//не изменяемые свойства. Что это значит хз
  initialValues:{login: 'SinGlE', pass: 123},//начальные значения в полях
  enableReinitialize:bool,//По.ум. false. при откл. компонента и вкл. смотрит на данные initialValues свойства. хз
  keepDirtyOnReinitialize:bool,//По.ум. false.Оставайтесь грязными при повторной инициализации. Вроде как после отправки формы не сбрасывается
  keepValues:"",//
  onChange:(val, dispatch, rfOb,prevVal) => {},//отрабатывает по вводу
  onSubmit:(val, dispatch, props) => {},//можно тут определять метод
  onSubmitFail:(err, dispatch, subErr, props) => {},//отрабатывает при ошибке отправки
  onSubmitSuccess:(result, dispatch, props) => {},//при успешной отправке
  persistentSubmitErrors:"",//
  propNamespace:"",//что-то с декорированием связано и с использованием других библиотек
  pure:bool,//По ум. true. тож не ясно.
  shouldAsyncValidate:(param) => {},//отрабатывает при асинхронных ошибках. Возвращая true свойство submitSucceeded останется false
  shouldError:"",//устарело
  shouldValidate:"",//устарело
  shouldWarn:"",//устарело
  submitAsSideEffect:bool,//По ум. false. Не обновлять данные объекта после отправки?
  touchOnBlur:bool,//По ум true помечает поля при взаимодействии с полем
  touchOnChange: bool, //По ум true помечает поля при непосредственном вводе в поле
  updateUnregisteredFields:bool,//хз
  validate,//синхронная валидация формы
  warn:(val, rfOb) => {},//тот же validate просто при ошибках заполняют объект warnings и потом смотрят на warning, а не error
})(Компонент);
/*
  Запускается сразу же. Ошибка пустоты куда-то улетает и передаётся если было касание, ничего не ввели
  потеряли фокус. Тогда ошибка вызовется. Отслеживает только ввод здесь и сейчас.
  rfOb это расширенный объект propsOK
  */
let validate = (val, rfOb) => {
  const errors = {}
  if (!val.login) errors.login = 'Required'
  if (!val.pass) errors.pass = 'Required'
  return errors
}
/* 
Предназначено для валидации на стороне backEnd. Ждём ответ работа с промисами.  
  Без asyncBlurFields, валидация asyncValidate будет отслеживать с первого ввода значения и последующий 
  ввод + потеря фокуса.  
  C asyncBlurFields валидация asyncValidate ввод по символьный.
*/
let asyncValidate = (val, dispatch, rfOb, nameField) => {
	
		try {
			if ((!val.login) && nameField === 'login') throw Promise.reject({login: 'Required'})
			if ((!val.pass) && nameField === 'pass')  throw Promise.reject({pass: 'Required'})
		} catch (error) {
			
			return error
		}

	}
let asyncBlurFields = ['login','pass'];
/*
  Для асинхронного вызова нужно получить нужные и отправить. Ей не нужно валидировать 
  каждое нажатие. Данный параметр соберёт с полей данные и передаст в asyncValidate 
*/

"------------------------------------------------------------------------------------"
"########------<{ Реализация ошибок }>-------###########"
Важно_в_любой_версии: "Практика показала в mapStateToProps форму не доставать иначе в некоторых случаях циклически обновляется"
____v5____
/* Указываем в formRedux временные имена. Если в mapStateToProps был передан из state
   объект формы ...props.form.myForm то при фокусе в props объектов fields который заменит массив.
   Не знаю как раньше но такой подход щас не работает т.к.пока нет этого объекта мы не можем обращаться к его свойствам
   получается мы требует undefined.touched. Что странно объект value появляться тогда когда в mapStateToProps
   передаём ...props.form. И обращаясь к console.dir(props.entrance); мы получим сначала undefined потом объект,
   что говорит проблеме синхронности данного кода.
*/
//при вводе заменит массив fields в redux-form
const { fields: { username }, handleSubmit } = props

{username.touched && username.error && (<span className="error">{username.error}</span>)}
//установили значения пока не сгенерирован объект. Имя формы откинул
formRedux({ fields: ['username', 'password'] })(Компонент);

____v6____
/* Создаётся метод, для того что бы его передать в пропс component. Почему метод?
   потому что так задумано и использовать его как компонент смысла нет (<renderInput> и не с заглавной буквы),
   кроме своих же  передаваемых props мы не увидим ничего, getFieldProps нету как в formik что бы получить всё необходимое*/
  

const renderInput = (field) => (
  /*Такой подход обрабатывает ошибки под каждым полем, но что если надо обрабатывать ошибки под формой? */
  <div>
    <input className={c.item} {...field.input} type={field.type} placeholder={field.placeholder}/>
    {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
  </div>
);

let Login = (props) => 
(
  <form>
    <Field type='text' name='login' component={renderInput} placeholder='Login' autoFocus />
  </form>
)

field = {
  meta: {
    active: false,//при фокусе и вводе true, при потере фокуса false
    asyncValidating: false,
    autofilled: false,
    dirty: false,//если хоть раз был ввод будет true. Если поле отличается от заданного по ум. значения в initialValues
    dispatch: ƒ (action),
    error: undefined,//* есть ли ошибка
    form: "entrance",
    initial: undefined,
    invalid: false,//true если есть ошибки
    pristine: true,//если поля формы совпадают с указанными по умолчанию значениями в initialValues
    submitFailed: false,
    submitting: false, //состояние кнопки.
    touched: false,//* "коснулся и покинул" будет true
    valid: true,
    visited: false,//пришёл на поле будет true
    warning: undefined,
  
  }
}
"------------------------------------------------------------------------------------"
"########------<{ Основные методы и свойства объекта propsOK и rfOb }>-------###########"
//некоторые методы делают то что можно сделать через reduxForm, просто это через props
{ //общие

  autofill(field, value)//автоматическое заполнение поля
  asyncValidating: bool//сработала ли асинхронная валидация.(если была установлена)
  blur('login', 123)//добавляет в поле если там ничего нет
  change('login', 123)//autofill,blur,change как-то одинаково работают
  destroy()//очистить состояние формы даже если компонент отключен
  reset()//сбрасывает форму полей до значений по умолчанию
  resetSection('')//сбрасывает секцию поля до значения по умолчанию
  submit()// Promise Отправляет форму
  handleSubmit: ƒ (submitOrEvent)//должна быть передана в onSubmit формы. она будет запускать наш метод onSubmit который мы должны положить в props 
  /*
      <form onSubmit={handleSubmit((ev)=>{})}>//передали прямо в вызов
    	<form onSubmit={handleSubmit}>//в props подготовили onSubmit
    	<form onSubmit={(ev)=>{}}>//полностью под нашим контролем
  */
  initialize({login: 'qq'})//тот же самый initialValues, просто через функцию
  //свойства для чтения
  anyTouched: true//если было какое-то касание любого поля
  array: Object//методы для полей
  error: {}// возможные ошибки
  initialized: bool//true если было установлено значение через initialize или initialValues
  initialValues: {login: 'qq'}//
  submitting: bool //
  pristine: bool//true если данные формы совпадают с initialValues
  valid: bool//если нет ошибок true иначе false

  //rfOb
  values: {login: "был ввод"}
}

array = {
  insert: ƒ (field, index, value),//вставляет в поле
  move: ƒ (field, from, to),//перемещает значение в поле
  pop: ƒ (field),//извлекает из конца
  push: ƒ (field),//помещает в конец
  remove: ƒ (field, index),//удаляет по заданному индексу
  removeAll: ƒ (field),//удаляет все значения в поле
  shift: ƒ (field),//удаляет из начала
  splice: ƒ (field, index, removeNum, value),//вырезает откуда покуда и что вставить на это место
  swap: ƒ (field, indexA, indexB),//меняет значения местами
  unshift: ƒ (field)//вставляет в начало
}
"------------------------------------------------------------------------------------"
"########------<{ методы Field. (не все) }>-------###########"

normalize: {(...a) => a[0].toUpperCase()}//пропускает через себя значения 
/*0: "FSAf" //настоящее значение
  1: "FSA" //прошлое значение. после потери фокуса приобретает настоящее значение
  2: {login: "FSAf"} //настоящее значение
  3: {login: "FSA"} //прошлое значение. после потери фокуса приобретает настоящее значение
  4: "login" //имя инпута*/
format: {(val, field)=> (val) && val.toUpperCase()}// похож на normalize. без блокировки значений
parse: {(val, field)=> val}// похож на normalize. 
component: ''//или передать метод для обработки ошибок или строку 'input' 'textarea' 'select'
validate: (val, obVal, rfOb, key) => {} //или [методов валидации] поля. 

{объект_формы_заполняется_по_мере_возникновений_событий
  anyTouched: true
  fields: {login: {}}
  registeredFields: {login: {} pass: {} isSavePass: {}}
  syncErrors: {login: "Required"}
  asyncErrors: {login: "Required"}
  submitErrors: {login: 'mySubmitError'}
  values: {login: 'myValue'}
  initial: {login: 'myInitialValue'}
}

Action_Creators

/*из redux-form можно экспортировать нужные нам действия */
arrayInsert(form, field, index, value)
arrayMove(form, field, from, to)
arrayPop(form, field)
arrayPush(form, field, value)
arrayRemove(form, field, index)
arrayRemoveAll(form, field)
arrayShift(form, field)
arraySplice(form, field, index, removeNum, value)
arraySwap(form, field, indexA, indexB)
arrayUnshift(form, field, value)
autofill(form, field, value)
blur(form, field, value)
change(form, field, value)
clearAsyncError(form, field)//Очистить асинхронную ошибку
clearSubmitErrors(form)//Удаляет submitErrors и error
clearFields(form, keepTouched/*boolean*/, persistentSubmitErrors/*boolean*/, ...fields)
/*Очищает значения всех переданных полей. Будет сброшено на initialValue если оно есть для поля.
keepTouched если имеет true, значения полей, будут сохранены.
persistentSubmitErrors если имеет true, сохраняет ошибки полей.*/
destroy(...forms)//Уничтожает формы, удаляя все их состояния
focus(form, field)//Отмечает данное поле как активное и посещенное
initialize(form, data, [keepDirty:boolean], [options:{keepDirty:boolean, keepSubmitSucceeded:boolean, updateUnregisteredFields:boolean, keepValues:boolean}])

/*
Устанавливает начальные значения в форме, с которыми будут сравниваться будущие значения данных для вычисления грязных и нетронутых. 
Параметр данных может содержать глубоко вложенный массив и значения объектов, которые соответствуют форме полей вашей формы.
Если параметр keepDirty имеет значение true, значения текущих «грязных» полей будут сохранены, чтобы избежать перезаписи пользовательских
изменений. (keepDirty может отображаться как третий аргумент или свойство параметров как 3-й или 4-й аргумент для обеспечения обратной 
совместимости).
Если параметр keepSubmitSucceeded имеет значение true, он не сбрасывает флаг submitSucceeded, если он установлен.
Если параметр updateUnregisteredFields имеет значение true, он будет обновлять все значения initialValue, если они все еще нетронутые,
а не только зарегистрированные поля. Настоятельно рекомендуется, по умолчанию -false из-за неразрывной обратной совместимости.
Если параметр keepValues ​​равен true, он сохранит старые значения и начальные значения.

*/
registerField(form, name, type)//Регистрирует поле в форме. Параметр типа может быть Field или FieldArray.
reset(form)//Сбрасывает значения в форме обратно к значениям, переданным с помощью самого последнего действия инициализации.
resetSection(form, ...sections)//Сбрасывает значения в разделах формы обратно к значениям, переданным с помощью самого последнего действия инициализации. 
setSubmitFailed(form, ...fields)//Отменяет флаг submitFailed в значение true, удаляет submitSucceeded и отправку, отмечает все переданные поля как затронутые, и, если было передано хотя бы одно поле, меняет значение anyTouched на true. 
setSubmitSucceeded(form)//Отменяет флаг submitSucceeded на значение true и удаляет submitFailed.
startAsyncValidation(form)//Отменяет флаг asyncValidating на значение true. 
startSubmit(form)//Отменяет флаг отправки на истинное значение.
stopSubmit(form, errorsOb)//Отменяет флаг отправки на false и заполняет submitError для каждого поля.
stopAsyncValidation(form, errorsOb)//Отменяет флаг asyncValidating на ложное и заполняет asyncError для каждого поля.
submit(form)//Запускает отправку указанной формы. 
touch(form, ...fields)//Отмечает все переданные поля как затронутые.
unregisterField(form, name)//Отменяет регистрацию поля в форме.
untouch(form, ...fields)//Сбрасывает отмеченный флаг для всех переданных полей.

