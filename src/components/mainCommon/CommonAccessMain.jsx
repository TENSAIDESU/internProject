import React, { useState, useEffect } from 'react';
import Header from "./../Header/headermain/Header"
import { useNavigate } from 'react-router';
import './CommonAccessMain.css';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleUserClick = (id) => {
    navigate(`/mainPage/${id}`);
  };

  return (
    <>
      <Header />
      <div>
        <div className="users">
          {users?.map(({ id, avatar, first_name, last_name }) => (
            <>
              <div className="user" onClick={() => handleUserClick(id)}>
                <img className='userImg' key={avatar} src={avatar} />
                <div key={id}>
                  {first_name} {last_name}
                </div>
              </div>
            </>
          ))}
        </div> 
           <div className="loadbutton">
             <button className='loadbtn' > Показать еще &#8744; </button>
           </div>
      </div>
    </>
  );
};
export default UsersPage;