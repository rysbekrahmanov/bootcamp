import React, { Component } from 'react';
import './Offer_trip.css';

class Offer_trip extends Component {
    render() {
        return (
            <div className="container">
                <div className="main">
                    <div className="post">
                     <h2>Предложить поездку</h2>
                     <label className="lab_1">Места встречи и высадки</label>
                     <div>
                        <input className="inp_1" placeholder="Откуда"></input>
                     </div>
                     <div>
                        <input className="inp_2" placeholder="Куда"></input>
                     </div>
                     <label className="lab_2">Дата и время отправления</label>
                     <div>
                        <input className="inp_3" type="date" name="bday" min="2000-01-02"></input>
                        <input className="time" type="time" name="usr_time"></input>
                     </div>
                     <div>
                        <input className="inp_4" placeholder="Цена с пассажира" ></input>
                        <input className="inp_5" type="number" name="quantity" min="1" max="10" placeholder="Свободных мест:"></input>
                     </div>
                     <label className="lab_3">Тел. для связи</label>
                     <div>                  
                        <input  className="inp_6" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" ></input>
                     </div>
                        <input  className="inp_7" type="checkbox"></input> <span>Есть Whatsapp</span>
                    </div>
                    <div>
                        <button className="submit" >Готово</button>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Offer_trip;