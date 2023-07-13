const host = "http://120.46.41.223:8080/data";


import {useNavigate} from 'react-router-dom';

export const login = (data) => {
    fetch(host + "/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => {
            if (result.status >= 400 && result.status < 500) {
                throw new Error('用户名或者密码错误');
            }
            return res.json();
        }
    ).then(
        (result) => {
            console.log("login_result", result);
            const history = useNavigate();
            history.push('/');
        },
        (error) => {
            console.log("error-res:");
            console.log(error);
        }
    );
};