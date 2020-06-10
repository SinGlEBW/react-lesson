import React, { Component } from "react";
import './footer.css';
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__wraps">
            <div className="footer__contact">Какой-то адрес</div>
            <a className="footer__contact" href="/">
              Email: {this.props.email}
            </a>
            <a className="footer__contact" href="/">
              Тел: {this.props.tel}
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
