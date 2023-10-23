async function register(username, password) {
    console.log(username, password);
    const user = {
        "user_name": username,
        "password": password,
        "nick_name": username,
        "key": "1234567890123456"//后端要求的key
    }
    try {
        const promise = await fetch("http://147.182.167.70:3000/api/v1/user/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        console.log(JSON.stringify(user));
        const response = await promise.json();
        return response;
    }
    catch(error) {
        console.log(error);
    }
}
export default register;