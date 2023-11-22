import React from 'react'
import '../style/Header.css'
import burger from '../img/burger.png'

function Header() {
  return (
    <div className='main' >
            <div className="title">
                <h3>работаем с 11:00 до 22:00</h3>
                <h1>Лучшие <br /> Бургеры</h1>
                <p>Закажи наши фирменные бургеры или собери что-то <br />
                 своё, а наши курьеры доставят за 30 минут</p>
                <button>ЗАКАЗАТЬ</button>
            </div>
            <div className="imgBlock">
                <div className="line">

                </div>
                <img src={burger} alt="" />
            </div>
    </div>
  )
}

export default Header