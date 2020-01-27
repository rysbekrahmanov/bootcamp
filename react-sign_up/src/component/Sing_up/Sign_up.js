import React, { Component } from 'react';
import './Sign-up.css';

class Sign_up extends React.Component {
    render() {
        return (
            
            <div className="container">
                <div className="main">
              <div className="pop-card">
                  <h3>Зарегистрироваться</h3>
                  <div>
                      <input  className="inp_1"  type="text" placeholder="Ваше имя"></input>
                  </div>
                  <div>
                      <input className="inp_2"  type="tel" placeholder="Номер телефона"></input>
                  </div>
                  <div>
                      <input className="inp_3"  type="password" placeholder="Придумайте пароль"></input>
                  </div>
                  <div>
                      <input className="inp_4"  type="password-confirm" placeholder="Повторите пароль"></input>
                  </div>
                  <label className="pop-text-small">
                      <input className="pop-checkbox" type="checkbox"></input>
                      Я принимаю Условия использования
                  </label>
                  <div>
                      <button className="pop-button" type="submit">Готово</button>
                  </div>
                  <p class="pop-text-bold">Уже зарегистрированы?<a href='login'>Войти</a></p>
                  </div> 
                  </div>
                   
            </div> 
        
        );
    }
}

export default Sign_up;