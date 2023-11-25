import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { MDBContainer } from 'mdb-react-ui-kit'
import { Col, Row } from 'react-bootstrap'
const Contacts = () => {
  return (
    <>
      <Header title='Контакты' description='' />
      <section className='Contacts'>
        <div className="Text" style={{ marginBottom: '100px' }}>
          <p><strong>Адрес:</strong> 423450, Республика Татарстан, Альметьевский район, н.п. Поташная Поляна</p>
          <p><strong>E-mail:</strong> glk-tatneft@yandex.ru</p>
          <p><strong>Телефоны:</strong> Администратор: 8 8553 375-050 (круглосуточно)</p>
          <p><strong>Путь следования:</strong></p>
          <ul>
            <li>Авиатранспортом – до аэропорта «Бугульма».</li>
            <li>Железнодорожным транспортом – до станции «Бугульма» или станции «Альметьевская».</li>
            <li>Далее: с автовокзала г. Бугульма – Альметьевск.</li>
            <li>Затем с автовокзала г. Альметьевск на такси.</li>
          </ul>
          <p><strong>Режим работы:</strong></p>
          <p>Вторник-Воскресенье: 09:00–22:00</p>
          <p>Понедельник: отдых</p>
        </div>

        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab7a0e8d2eb6f2f743692cfe7bea8c7b109e4ccff41181622f9728a715a0aca2b&amp;source=constructor"
          style={{ height: '450px'}}></iframe>
      </section>
      <Footer />
    </>
  )
}

export default Contacts