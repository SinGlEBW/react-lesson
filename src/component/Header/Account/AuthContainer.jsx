import React from 'react';
import { connect } from 'react-redux';

import { authT } from 'src/redux/reducer/Header/auth-reducer';
import Auth from './Auth';

class AuthContainer extends React.Component {

  stepBelow = (e, numInp) => {

    let count = 0;
    if (e.key === 'Enter') {
      for (let i of e.currentTarget) {
        count++;
        if (i.name === e.target.name) {
          if (count < numInp) break;
          else count = 0;
      }}
      e.currentTarget[count].focus()
  }}

  componentDidMount = () => {

  }
  valid = (val, rfOb) => {
    console.dir(rfOb);
  }
  send = (val) => {
    console.dir(1);
    return true
  }
  render = () => {
    console.dir(this.props);
    return <Auth onSubmit={this.send} 
                 stepBelow={this.stepBelow} {...this.props}
                 />
  }
}

let mapStateToProps = (props) => ({ auth: props.auth })

export default connect(mapStateToProps, {
  authT
})(AuthContainer)



/*
  Если случилась такая ситуация когда требуется передавать значения state и функционал
  родительского компонента, то есть вариант подключать получить любой state через
  Можно не передавать через props сам state, его можно заполучить через mapStateToProps,
  а функционал импортировать и передать в mapDispatchToProps
*/

  // let err = Object.entries(this.props.auth.errors).find((item) => item[1])

    // let formRef = [this.refLogin, this.refRegister].find((item, inx) => {
    //   let forma = (!item.current)? false : item.current.name;
    //   return err[0] === forma
    // })

    // if(err && formRef)
    //   this.errors(err, formRef)



    /*
      КАКИЕ-то проверки написанные мной

        errors = (err, formRef) => {
    console.dir(formRef);
  }
  stepBelow = (e, numInp) => {

    let count = 0;
    if (e.key === 'Enter') {
      for (let i of e.currentTarget) {
        count++;
        if (i.name === e.target.name) {
          if (count < numInp) break;
          else count = 0;
        }
      }
      e.currentTarget[count].focus()
    }
  }

  phoneMask = (dataInputTel) => {
    return (dataInputTel.match(/\D/)) ? false : dataInputTel
  }
  changeInp = ({ target }) => {

    let value = (target.name === 'phone') ? this.phoneMask(target.value) : target.value;

    if (typeof value === 'string') {//обрабатываю пустоту
      this.props.changeInput(target.name, value);
    } else {
      console.dir('Требуется ввод цифр');
    }
    // 
  }
  send = (e) => {
    e.preventDefault();
    const formName = e.target.parentNode.name;
    const data = new FormData(e.target.parentNode);
    this.props.authT(formName, data);

  }

    */