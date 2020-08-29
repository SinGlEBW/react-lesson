/*eslint-disable */
/*--О структуре компонентов.. Часто методы и свойства хранятся выше по структуре
  1. для того что бы контролировать и обеспечивать разные компоненты одними и теми же методами и свойствами    
  2. оставить более чистые дочерние компоненты
  Передавать данные можно через props и между компонентом в поле children.
  Передавать можно даже компоненты
  */
  
<SplitPane left={ <Contacts />} right={ <Chat /> } />;
props.children - /*для примитивов свойство, для переданной функции - метод props.children() */
                            
<Fragment></Fragment> //пустая обёртка или так <> </> 

/*При итерации можем передать что-нибудь в событие*/ 
   
arr.map((item) => (
  <div onClick={(e)=>{ this.evChange(e, item.number) }}>item.number</div>
))

/*
Заметка
Иногда при построении сайтов предусматривают вариант для людей с ограниченными возможностями
Когда проектируются такие решения нужно использовать не camelCase а kebab-case.
В React есть атрибут aria-* и целый список возможностей. 
*/

const Context = React.createContext('light');//создание контекста. Принимает defaultValue
/* 
  Как я понимаю оборачивание компонента это возможность получить данные ниже по структуре,
  в том месте где определим contextType или Consumer. value props от Provider 
*/
<Context.Provider value="dark">  <MyComponent /> </Context.Provider>
 
/* конкретно в классовой компоненте пишем так, что бы данные были в объекте context */
class newComponent {
  static contextType = Context;
}
/* Получить контекст в функциональной компоненте */
<Context.Consumer>{value => {/* отрендерить что-то, используя контекст */}}</Context.Consumer>;


const Component3 = (props) => {
  const formikStateAndHelpers = useFormik(props);
  return (
    <Context.Provider value={formikStateAndHelpers} >/*слежка и передача ниже */
      {typeof children === 'function'
        ? children(formikStateAndHelpers)//передаётся выше. Возможно там будут изменения
        : children}
    </Context.Provider>
  );
}
/*
  Видел такую конструкцию. В children мы ожидаем данные переданные из родителя.Методы мы просто запустим
  и передадим значения на уровень выше, но отображать будем там где вызвали, а Context.Provider
  это заготовка для передачи данных ниже по структуре. Так что если бы мы передали ещё компонент,
  то могли бы где-то ниже использовать  
  contextType или Consumer. Если я не ошибаюсь суть данного кода не только передать данные, но
  и обновлять state если будут изменения данных между компонентом Provider
*/
/*
  Если много чего передавать, можно взять нижний компонент по структуре закинуть в верхний
  там снабдить его данными и спустить по структуре этот компонент, такой подход не всегда оправдан
  и перегружает в некоторых случаях компоненты через которые передаётся данный компонент, 
  да и логика структуры ломается, а так можно больше одного компонента передавать через props по структуре
  В таком подходе подключения будут собираться в том файле откуда будет начинаться путь компонента
*/

/*--СОБЫТИЯ--*/
onFocus//реагирует при фокусировке на элементе
/* свойства и методы класса event */
/*
  В React над обычным объектом Event есть обёртка SyntheticEvent которая при вызове события 
  передаёт данные в event и очищается. (сделано это дял производительности. Поэтому я ничего там
  не видел, только после вызова). Что бы исключить этот объект из потока и использовать асинхронно
  нужно вызвать e.persist()
*/
e.bubbles//является ли событие всплывающим в DOM :=> bool
e.cancelable//является ли событие отменяемым :=> bool
e.charCode//хз но вместо кода клавиши возвращает 0
e.ctrlKey//был ли нажат Ctrl
e.shiftKey//был ли нажат Shift

e.currentTarget//target тот на котором висит событие. Не важно если кликаем на дочерний элемент
e.target//если событие на родителе, то в target попадает тот элемент на который тыкнули
e.defaultPrevented//информирует был ли в событии установлен e.preventDefault() :=> bool
e.detail//возвращает число кликов по событию. Клики засчитываются если интервал чуть меньше секунды иначе сбрасывается 
e.dispatchConfig//описывает что за событие отработало
e.eventPhase//возвращает число типа event: Ev.NONE = 0 Ev.CAPTURING_PHASE = 1 Ev.AT_TARGET = 2 Ev.BUBBLING_PHASE = 3
e.getModifierState("Shift")//была ли нажата. На всю клавиатуру не распространяется, только определённые кнопки. читать Modifier keys on Gecko
e.keyCode || e.which //определяют код клавиши 
e.type//определяет чем нажато. Смысла от этого нет т.к. я определяю событиями мыши или клавы 
e.timeStamp//показывает число в промежутке времени котором было отработано событие
e.nativeEvent//js нативый event

