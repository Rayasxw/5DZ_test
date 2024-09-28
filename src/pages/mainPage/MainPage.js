import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userPush} from "../../store/UserSlice";

function MainPage() {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [message, setMessage] = useState('')
    const users = useSelector(state => state.UserReducer.users)
    const dispatch = useDispatch()



    const handleCreateUser = () => {

        if(!username || !password || !repeatPassword) {
            setMessage('Все поля обязательны')
            return;
        }else if(password !== repeatPassword) {
            setMessage('Пароли не совпадают')
            return;
        }else if(users.find(user => user.username === username )) {
            setMessage('Пользователь уже существует')

            return ;
        }

        dispatch(userPush({username}))
        setMessage('Регистрация успешна')
        setUsername('')
        setPassword('')
        setRepeatPassword('')
    }



    return (
        <div>
            <input
                type="text"
                placeholder="Введите имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            <input
                type="text"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) =>setPassword(e.target.value) }/>
            <input
                type="text"
                placeholder="Введите пароль еще раз"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}/>
            <button onClick={handleCreateUser}>Зарегистрировать</button>
            {message && <p>{message}</p>}

        </div>
    );
}

export default MainPage;