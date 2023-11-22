import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AboutUs from '../assets/img/App/AboutUs.jpg'
import Gallery from '../components/Gallery'

const Home = () => {
    return (
        <><Header title='ЯН' description='горнолыжный курорт' />
            <main>
                <section className="AboutUs">
                    <div className="ImageSection">
                        <img src={AboutUs} alt="" />
                    </div>
                    <div className="TextSection">
                        <h4>О нас</h4>
                        <h2>Добро пожаловать на горнолыжный курорт "Ян!"</h2>
                        <p>Ян - это идеальное место для отдыха как для опытных лыжников, так и для новичков. Наши многокилометровые трассы, современные подъемники и уютные гостиничные комплексы создадут незабываемую атмосферу для вашего отпуска</p>
                    </div>
                </section>
                <section className='Photos'>
                    <h4>фото-отчет</h4>
                    <h2>Делимся впечатлениями</h2>
                    <p>Ознакомьтесь с нашей галереей, чтобы увидеть красоту наших горных пейзажей и комфортных номеров. Взгляните на волнующие моменты предыдущих сезонов и почувствуйте волнение ожидания новых приключений.</p>
                    <Gallery />
                </section>
            </main>
            <Footer /></>
    )
}

export default Home