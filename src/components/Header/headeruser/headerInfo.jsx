import React from 'react';
// import './Header.css';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

function ExitButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <button className='accountPanel__button' type="button" onClick={handleClick}>
    Выйти
    </button>
  );
}
function ReturnButton() {
    const navigate = useNavigate();
  
    function handleClick() {
      navigate("/mainPage");
    }
    return (
      <button className='accountPanel__button' type="button" onClick={handleClick}>
      Назад
      </button>
    );
  }

function HeaderInfo() {
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <header className='head'  >
        <ReturnButton />
      <div className='header__button'>
        <ExitButton/>
      </div>  
    </header>
  )
}

export default HeaderInfo