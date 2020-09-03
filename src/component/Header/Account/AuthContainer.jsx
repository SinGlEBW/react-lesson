import React from 'react';
import { connect } from 'react-redux';
import { checkAuth, authT, changeInput } from 'src/redux/reducer/Header/auth-reducer';
import Auth from './Auth';

class AuthContainer extends React.Component {
  refLogin = React.createRef();
  refRegister = React.createRef();

  componentDidMount = () => {

    // let err = Object.entries(this.props.auth.errors).find((item) => item[1])

    // let formRef = [this.refLogin, this.refRegister].find((item, inx) => {
    //   let forma = (!item.current)? false : item.current.name;
    //   return err[0] === forma
    // })

    // if(err && formRef)
    //   this.errors(err, formRef)
  }
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
    let a = this.props.authT(formName, data);

  }

  render = () => {
    
    return <Auth stepBelow={this.stepBelow}
    send={this.send}
    changeInp={this.changeInp}
    auth={this.props.auth}
    refLogin={this.refLogin}
    refRegister={this.refRegister}
    errors={this.errors}
  />
  }
}

let mapStateToProps = (props) => ({ auth: props.auth })

export default connect(mapStateToProps, {
  changeInput,
  checkAuth,
  authT

})(AuthContainer);



/*
  Если случилась такая ситуация когда требуется передавать значения state и функционал
  родительского компонента, то есть вариант подключать получить любой state через
  Можно не передавать через props сам state, его можно заполучить через mapStateToProps,
  а функционал импортировать и передать в mapDispatchToProps
*/