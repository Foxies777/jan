import React from 'react'
import ProfileButtons from './ProfileButtons'
const ProfileAccount = () => {
  return (
    <section className='Account'>
      <ProfileButtons />
      <div className="Container">
        <h4>Аккаунт</h4>
        <div className="ProfileInfo">
          <div className="ProfileSections">
            <p><strong>Иванов Иван</strong></p>
            <p>04.10.2000</p>
          </div>
          <div className="ProfileSections">
            <p><strong>Почта</strong></p>
            <p>Ivanov@gmail.com</p>
          </div>
          <div className="ProfileSections">
            <p><strong>Пароль</strong></p>
            <div className="circles">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <button>Редактировать</button>
      </div>
    </section>
  )
}

export default ProfileAccount