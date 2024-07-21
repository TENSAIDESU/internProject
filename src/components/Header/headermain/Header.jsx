import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router';
import exit from "../exit.svg"

function ReturnButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <button className='accountPanel__button' type="button" onClick={handleClick}>
    <span>Выйти </span> <img src={exit} className='exit'/>
    </button>
   
  );
}

function Header() {

  return (
    <header className='head'>
      <div className='header__text'>
      <h1 className='heading'>Наша команда</h1>
      <p className='heading_p'>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
      </div>
      <div className='header__button'>
        <ReturnButton/>
      </div>  
    </header>
  )
}

export default Header
