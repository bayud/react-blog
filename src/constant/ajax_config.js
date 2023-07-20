const host = "http://120.46.41.223:5233/data";

export const login = (data, success_call_back, error_call_back) => {
    post_request(data, "/login", success_call_back, error_call_back);
};


export const get_blog_data = (page, pageSize, success_call_back, error_call_back) => {
    const limit = pageSize;
    const offset = (page - 1) * pageSize;
    get_request({limit: limit, offset: offset}, "/blog/list", success_call_back, error_call_back);
};

export const delete_blog_data = (data, success_call_back, error_call_back) => {
    get_request(data, '/blog/delete', success_call_back, error_call_back);
};

export const get_file_url = (file_name) => {
    return host + '/file/' + file_name;
};

export const post_content = (data, success_call_back, error_call_back) => {
    post_form_data(data, '/blog/insert', success_call_back, error_call_back);
};
export const post_content_update = (data, success_call_back, error_call_back) => {
    post_form_data(data, '/blog/update', success_call_back, error_call_back);
};


const post_form_data = (data, url_path, success_call_back, error_call_back) => {
    fetch(host + url_path, {
        method: 'POST',
        redirect: 'follow',
        credentials: 'include',
        body: data
    }).then(res => {
            if (res.status !== 200) {
                throw  new Error("" + res.status);
            }
            return res.json();
        }
    ).then(success_call_back, error_call_back);
}


const post_request = (data, url_path, success_call_back, error_call_back) => {
    fetch(host + url_path, {
        method: 'POST',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(res => {
        if (res.status !== 200) {
            throw  new Error("" + res.status);
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

    const url = host + url_path + "?" + params.toString();
    fetch(url, {
        method: 'GET',
        credentials: 'include'
    }).then(res => {
            if (res.status !== 200) {
                throw new Error("" + res.status);
            }
            return res.json();
        }
    ).then(success_call_back, error_call_back);
};