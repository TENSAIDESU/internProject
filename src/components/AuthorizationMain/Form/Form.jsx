import React, { useState} from 'react'
import './Form.css';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';



function Form() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

 const [show,setShow] = useState(false)
  const handleShow = () =>{
    setShow(!show)
  }

  const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
 
        if (Object.keys(newErrors).length === 0) {
            // Form submission logic here
            navigate ('/mainPage')

            console.log('Form submitted successfully!');
        } else {
            console.log(`Form submission failed
             due to validation errors.`);
        }
    };
   
    const validateForm = (data) => {
        const errors = {};
 
        if (!data.username.trim()) {
            errors.username = 'Поле "Имя" не заполнено';
        }
 
        if (!data.email.trim()) {
            errors.email = 'Поле "Электронная почта" не заполнено';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Адрес электронной почты недействителен';
        }
 
        if (!data.password) {
            errors.password = 'Поле "Пароль" не заполнено';
        } else if (data.password.length < 8) {
            errors.password = `длина пароля должна составлять не менее 8 символов`;
        }
 
        if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Пароли не совпадают';
        }
 
        return errors;
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Имя</label>
                    <input
                        className="form-input"
                        placeholder='Артур'
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username &&
                        <span className="error-message">
                            {errors.username}
                        </span>
                    }
                </div>
                <div>
                    <label className="form-label"> Электронная почта</label>
                    <input
                        className="form-input"
                        placeholder='example@gmail.com'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email &&
                        <span className="error-message">
                            {errors.email}
                        </span>
                    }
                </div>
                <div>
                    <label className="form-label"> Пароль</label>
                    <div className="labelform">
                    <input
                        className="form-input"
                        type={show?"text":"password"}
                        name="password"
                        placeholder='********'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span className='password__btn' onClick={handleShow}>{show? <FaRegEye/> : <FaEyeSlash/>}</span>
                    </div>
                    {errors.password &&
                        <span className="error-message">
                            {errors.password}
                        </span>
                    }
                </div> 
                <div> 
                    <label className="form-label">Подтвердите пароль</label>
                    <div className="labelform">
                    <input
                        className="form-input"
                        placeholder='********'
                        type={show?"text":"password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    /> 
                     <span className='password__btn_two' onClick={handleShow}>{show? <FaRegEye/> : <FaEyeSlash/>}</span>
                     </div>
                    {errors.confirmPassword &&
                        <span className="error-message">
                            {errors.confirmPassword}
                        </span>
                    }
                </div>
                <button className='submit-button' type="button" onClick={handleSubmit}>Зарегистрироваться</button>
            </form>
        </div>
    );
}
 
export default Form;
