import React from "react";
import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import Test from "./component/form-test";

function App() {
  return (
    <div className="App">
      <Header />
      <Test textTest={['Вопрос 1 lorem dsfsdfsdddff', 'Вопрос 2', 'Вопрос 3']}/>
      <Footer email="sbw@mail.ru" tel="417555" />
    </div>
  );
}

export default App;
