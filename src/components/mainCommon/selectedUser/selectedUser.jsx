import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import email from "./email.svg"
import Phone from "./Vector.svg"
import exit from "../../Header/exit.svg"
import back from "../../Header/back.svg"

function ExitButton() {
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
function ReturnButton() {
    const navigate = useNavigate();
  
    function handleClick() {
      navigate("/mainPage");
    }
    return (
      <button className='accountPanel__button' type="button" onClick={handleClick}>
       <span>Назад </span> <img src={back} className='exit'/>
      </button>
    );
  }
export const CurrentUser = () => { 
  const { id } = useParams(); 
  const [selectedUser, setSelectedUser] = useState(null);
   useEffect(() => { fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedUser(data.data))
      .catch((error) => console.log(error));
  }, []);
  if (!selectedUser) {
    return null;
  }
  let description = selectedUser.description ?? 'Пользователь пока не заполнил описание';
  let phonenum = selectedUser.phone ?? 'Нет номера телефона';
  return (
<>
    <header className='header_userInfo'  >
        <ReturnButton />
          <div className='header__user' key={selectedUser.id}>
            <img src={selectedUser.avatar} className='userImg' alt="Аватар пользователя" />
            <h3 className='heading'>{selectedUser.first_name} {selectedUser.last_name}</h3>
         </div>
        <ExitButton/>
    </header>
      <div className="selecteduser" key={selectedUser.id}>
          <p>{description}</p> 
            <div className='contacts'>
              <p> <img src={Phone} alt='phone'/> {phonenum}</p>
             <p><img src={email} alt='phone'/>  {selectedUser.email}</p>  
           </div>
      </div>
    
      </>
  );
};
export default CurrentUser