export const profileRequest = (nickname,address,contact) => ({
    type: "PROFILE_REQUEST",
    nickname,
    address,
    contact
});

export const profileSuccess = (nickname,address,contact,success) => ({
    type: "PROFILE_SUCCESS",
    message: success,
    nickname,
    address,
    contact
});

export const profileFailure = (error) => ({
    type: "PROFILE_FAILURE",
    message: error
});
