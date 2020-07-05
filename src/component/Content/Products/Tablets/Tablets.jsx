import React from 'react';

export const Tablets = (props) => {
   // checkValue: localStorage.getItem('checked') || false;
   let evCheck = ({ target }) => {

      if (target.name === 'checkValue') {
         localStorage.setItem('checked', target.checked);
         this.setState({});
      } else {
         this.setState({ [target.name]: target.value })
      }
   }
   
   let check = JSON.parse(localStorage.getItem('checked'));
   let options = props.products.phone.map((item) => <option className="select__item" key={item.id} defaultValue={item.name} >{item.name}</option>)
   let checkFilter = props.products.phoneFILTER[0].name;
   return (
      <section className="list-phone">
         <div className="container">

            {/* <form className='list-phone__form'>
               <div className="list-phone__items-wrap">
                  <select className="list-phone__select select" value={checkFilter} onChange={this.handleChange1} >
                     {options}
                  </select>
                  <div className="block-info">{this.state.value}</div>
               </div>
               <div className="list-phone__items-wrap">
                  <input className="list-phone__formItem" name="checkValue" type="checkbox" onChange={this.evCheck} defaultChecked={check} />
                  <div className="block-info">{(check) ? 'Выбрано' : 'Не выбрано'}</div>
               </div>
               <div className="list-phone__items-wrap">
                  <input className="list-phone__formItem" name="rangeValue" type="range" defaultValue={this.state.rangeValue} onChange={this.evCheck} />
                  <div className="block-info">{this.state.rangeValue}</div>
               </div>
            </form>
            <div className="show-product">
               {checkFilter}
            </div> */}
         </div>
      </section>
   )
}
