const host = "http://120.46.41.223:8080/data";


import {useNavigate} from 'react-router-dom';

export const login = (data, success_call_back, error_call_back) => {
    post_request(data, "/login", success_call_back, error_call_back);
};


export const get_blog_data = (page, pageSize, success_call_back, error_call_back) => {
    const limit = pageSize;
    const offset = (page - 1) * pageSize;
    get_request({limit: limit, offset: offset}, "/blog/list", success_call_back, error_call_back);
};


const post_request = (data, url_path, success_call_back, error_call_back) => {
    fetch(host + url_path, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(res => {
            if (res.status >= 400 && res.status < 500) {
                throw  new Error(res.error());
            }
            return res.json();
        }
    ).then(success_call_back, error_call_back);
};


const get_request = (data, url_path, success_call_back, error_call_back) => {
    const params = new URLSearchParams();
    Object.keys(data).forEach((key, index) => {
        params.append(key, data[key]);
    });

    const url = host + url_path + params.toString();
    fetch(url, {
        method: 'GET',
    }).then(res => {
            console.log("get-response:", res);
            if (res.status >= 400 && res.status < 500) {
                throw  new Error(res.error());
            }
            return res.json();
        }
    ).then(success_call_back, error_call_back);
};