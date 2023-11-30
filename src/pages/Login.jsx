import React, { useState } from "react";
import '../components/Sign/Sign.scss';
import SignUpForm from "../components/Sign/SignUp";
import SignInForm from "../components/Sign/SignIn";

export default function Login() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className='LoginBody'>
      <div className='Login'>
        <div className={containerClass} id="container">
          <SignUpForm />
          <SignInForm />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Привет!</h1>
                <p>
                  Чтобы оставаться на связи с нами, пожалуйста, войдите в систему, указав свои личные данные
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => handleOnClick("signIn")}
                >
                  Войти
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Привет, Друг!</h1>
                <p>Введите свои личные данные и начните путешествие вместе с нами</p>
                <button
                  className="ghost "
                  id="signUp"
                  onClick={() => handleOnClick("signUp")}
                >
                  Регистрация
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
