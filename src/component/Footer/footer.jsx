import React, { useState } from "react";
import c from './footer.module.css';

const Footer = (props) => {
  return (
    <footer className={c.footer}>
      <div className="container">
        <div className={c.wrap} >
          <a className={c.link} href="/">Email: {props.email}</a>
          <a className={c.link} href="/">Тел: {props.tel}</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer