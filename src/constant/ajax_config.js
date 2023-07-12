const host = "http://localhost:8080/data";


export const login = () => {
    const params = new URLSearchParams();
    params.append('token', 'bayud1630');
    fetch(host + "/login?" + params.toString(), {
        method: 'GET',
        data: JSON.stringify({key: 'value'})
    }).then(res => {
            console.log("res", res);

            const result = res.json();
            console.log(res, result);
            return result;

        }
    ).then(
        (result) => {
            console.log(result)
        },
        (error) => {
            console.log("error-res:");
            console.log(error);
        }
    );
};