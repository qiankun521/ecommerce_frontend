async function changeProfile(username, nickname, address, contact) {
    //TODO 与后端交互
    //模拟延迟一秒
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: 200,
                msg: "修改成功"
            });
        }, 1000);
    });
    return promise;
}
export default changeProfile;