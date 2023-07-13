const host = "http://120.46.41.223:8080/data";



import { useHistory } from 'react-router-dom';

export const login = (username, password) => {
    const params = new URLSearchParams();
    fetch(host + "/login?" + params.toString(), {
        method: 'POST',
        data: JSON.stringify({username: 'value', password: password})
    }).then(res => {
            console.log("res", res);
            const result = res.json();
            console.log(res, result);
            return result;
        }
    ).then(
        (result) => {
            const history = useHistory();
            console.log(result);
            history.push('/blog');

        },
        (error) => {
            console.log("error-res:");
            console.log(error);
        }
    );
};