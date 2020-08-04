/*eslint-disable */
<React.Fragment></React.Fragment> //пустая обёртка  
props.children - //свойство в котором отображается информация заложенная в родительском компоненте
/*
   Так же через props можно передавать другие компоненты
*/
<SplitPane left={ <Contacts />} right={ <Chat /> } />
 
/*
   Когда совершаем итерацию мы вешаем события и когда нам нужно что-то передать в событие мы можем сделать так
*/   
arr.map((item) => {
   return <div onClick={(e)=>{ this.evChange(e, item.number) }}>item.number</div>
})
      
      
        
     