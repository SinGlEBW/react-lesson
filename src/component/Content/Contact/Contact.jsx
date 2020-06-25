import React, { Component } from 'react';
import './Contact.css';
import Temperature, { Temperature1, TemperatureInput } from './Temperature/Temperature';
import { Provider } from 'react-redux';

export default class Contact extends Component {
   deg = [
      ['Celsius', 'Целсия'],
      ['Fahrenheit', 'Фаренгейт']
   ]

   state = {
      fahrenheit: '',
      celsius: '',
      key: '',
      temp: '',
      scale: 'C',
      temperature: ''
   }

   evChangeTemperature = (target) => {//Ориентируюсь на ключ в target, только после обновляем state
      if (target.name === "Celsius") {
         let f = (target.value !== '') ? (9 / 5 * target.value) + 32 : '';
         this.setState({
            fahrenheit: f,
            celsius: target.value
         })
      }
      if (target.name === "Fahrenheit") {
         let c = (target.value !== '') ? 5 / 9 * (target.value - 32) : '';
         this.setState({
            fahrenheit: target.value,
            celsius: c,
         })
      }
   }

   evChangeTemp = ({ target }) => {
      this.setState({ key: target.name, temp: target.value })
   }
   convert = () => {
      let celsius = (this.state.key === "C" && this.state.temp !== '');
      let fahrenheit = (this.state.key === "F" && this.state.temp !== '');
      let F = celsius ? (9 / 5 * this.state.temp) + 32 : this.state.temp;
      let C =  fahrenheit ? 5 / 9 * (this.state.temp - 32) : this.state.temp;
      F =(Math.round(F * 1000) / 1000).toString();
      C = (Math.round(C * 1000) / 1000).toString();
      return {C, F}
   }

   handleChange = ({ target }) => {//Обновляем state и ориентируемся по ключам в state
      this.setState({ scale: target.name, temperature: target.value });
   }

   toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9

   toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

   tryConvert = (temperature, convert) => {
      const input = parseFloat(temperature);
      if (Number.isNaN(input)) {
         return '';
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
   }

   render = () => {
      console.dir(this);
      const celsius = (this.state.scale === 'F') ? this.tryConvert(this.state.temperature, this.toCelsius) : this.state.temperature;
      const fahrenheit = (this.state.scale === 'C') ? this.tryConvert(this.state.temperature, this.toFahrenheit) : this.state.temperature;

      return (
         <main className="contact">
            <div className="container">
               <fieldset>
                  <legend>Конвертор температуры</legend>                      {/* Используем родительский state */}
                  <Temperature evChangeTemperature={this.evChangeTemperature} deg={this.deg[0]} value={this.state.celsius} />
                  <Temperature evChangeTemperature={this.evChangeTemperature} deg={this.deg[1]} value={this.state.fahrenheit} />
                  {/*Значение можно передавать пачкой, нужное можно выбрать по ключу */}
                  <Temperature1 scale="C" value={this.convert()} evChangeTemp={this.evChangeTemp} />
                  <Temperature1 scale="F" value={this.convert()} evChangeTemp={this.evChangeTemp} />

                  <TemperatureInput scale="C" temperature={celsius} onTemperatureChange={this.handleChange} />
                  <TemperatureInput scale="F" temperature={fahrenheit} onTemperatureChange={this.handleChange} />

               </fieldset>
            </div>
         </main>
      )
   }
};
console.dir();
/*
   ВАЖНО. Выделил для себя 2 важных момента. 
   1. Можно по событию обновлять state и потом реагировать на данные в state, используя данные где-то в функциях
   2. Можно предварительно смотреть что получаем из события и потом обрабатывать что бы положить конечный результат в state для последующего вывода  
*/

/*
   Всплытие state - это когда используется общий родительский state пробросив информацию callback'ом
   При использовании многоразово отдельных компонентов, можно встретиться с проблемой если неправильно использовать state
   Просто запоминаем. Несколько компонентов реагирующих на один state, требует использования родительского state,
   что бы не пытаться синхронизировать дочерние state
*/
/*
   Можно метод передать под событие дочернему элементу. Все изменения которые произойдут в родительском компоненте
   за счёт дочернего, можно далее использовать. Так же можно иметь посредника
   использовав локальный метод под событие в дочернем элементе и передать значение родительскому методу
   Суть не меняется это называется подъём состояния. Потому что используем родительское состояние передавая изменённое
   значение дочерним элементам.

*/
