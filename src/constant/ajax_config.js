const host = "http://120.46.41.223:8080/data";


import {useNavigate} from 'react-router-dom';

export const login = (data, success_call_back, error_call_back) => {
    fetch(host + "/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => {
            if (res.status >= 400 && res.status < 500) {
                throw  new Error('用户名或者密码错误');
            }
            return res.json();
        }
    ).then(success_call_back, error_call_back);
};