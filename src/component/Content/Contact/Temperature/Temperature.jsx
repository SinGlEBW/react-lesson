import React, { Component } from "react";

export default class Temperature extends Component {
  state = {
    d: 2,
  };
  componentDidMount = () => {
    console.dir(1);
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.dir(this.props);
  };
  render = () => {
    console.dir(3);
    return (
      <div>
        <span>{this.props.deg[1]}</span>
        <p>
          <input
            type="text"
            name={this.props.deg[0]}
            value={this.props.value}
            onChange={this.props.evChangeTemperature}
          />
        </p>
      </div>
    );
  };
}
const scaleNames = {
  C: "Цельсия",
  F: "Фаренгейта",
};
export class Temperature1 extends Component {
  //идеальный вариант

  render = () => {
    return (
      <div>
        <span>{scaleNames[this.props.scale]}</span>
        <p>
          <input
            type="text"
            name={this.props.scale}
            value={this.props.value[this.props.scale]}
            onChange={this.props.evChangeTemp}
          />
        </p>
      </div>
    );
  };
}

export class TemperatureInput extends Component {
  render() {
    return (
      <div>
        <span>Введите градусы по шкале: {scaleNames[this.props.scale]}</span>
        <p>
          <input
            value={this.props.temperature}
            name={this.props.scale}
            onChange={this.props.onTemperatureChange}
          />
        </p>
      </div>
    );
  }
}


/*
   Без посредника код чище

   В state можно хранить ключ от объекта. Или можно ориентироваться на имя input.
   Ориентация по имени подходит при создании одного универсального метода, где будет определена логика имён. 
   
   Иногда можно создать объект, заполнить его нужными значениями, а потом называть имена такими же ключами
   и при который в дальнейшем мы привязываем к значению по ключу через props 

*/
