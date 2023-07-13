const host = "http://120.46.41.223:8080/data";


import {useNavigate} from 'react-router-dom';

export const login = (data) => {
    fetch(host + "/login", {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res => {
        return res.json();
        }
    ).then(
        (result) => {
            console.log("login_result", result);
            if (result.status === 200) {
                const history = useNavigate();
                history.push('/');
            }

        },
        (error) => {
            console.log("error-res:");
            console.log(error);
        }
    );
};